import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import MediaQuery from "react-responsive";

import Connect, { BleChoice } from './components/Ble_connect';
import RadialGauge from './components/RadialGauge';
import Sensor from './components/Sensor';
import SetCard from './components/auto';

const useStyles = makeStyles((theme:any) => ({
    button: {
        float: 'right',
        margin: '20px 5px 0px 0px',
    },
    backdrop: {
        textAlign: 'center',
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    buttonIcon: {
        margin: theme.spacing(1),
        width: 60,
        height: 60,
        borderRadius: '50%',
    },
    gauge: {
        position: 'relative',
        top: 75,
        right: 40
    },
    gauges: {
        position: 'relative',
        top: 85,
        left: 56,
    },
    tempData: {
        marginTop: 50,
    },
    Automatic: {
        marginTop: 20,
        paddingBottom: 20
    }
}));

function SmartPhoneMain() {

    const classes = useStyles();

    // bluetoothボタン 接続/切断 切り替え  connectColor/ボタンの色  count/0or1 接続か切断
    const [connectColor, setColor] = React.useState<"default" | "primary">("default");
    const [count, setCount] = React.useState<any>(0);

    // bluetoothデバイス情報
    const [gatt, setgatt] = useState<any>(null);
    const [server, setServer] = useState<any>({ connected: false });
    const [characteristic, setCharacteristic] = useState<any>({ Characteristic_TX: null, Characteristic_RX: null });

    // Lord
    const [open, setOpen] = useState(false);

    const IsConnect = async () => {
        setOpen(!open);

        // bluetooth connect
        if (count === 0) {

            //Bleデバイス選択
            const res_Choice = await BleChoice();

            if (res_Choice === 'cancel') {
                console.log('cancel');
                setOpen(false);
                return;
            } else if (res_Choice === '現在のデバイスは、bluetoothに対応していません') {
                alert('現在のデバイスは、bluetoothに対応していません');
                setOpen(false);
                return;
            }

            //選択されたM5stickcの接続
            const res = await Connect(res_Choice);
            // console.log(res);

            // データ送信用情報が取得できているか
            const Characteristic_TX = res ? res.Characteristic_TX : null;

            // データ受信用情報が取得できているか
            const Characteristic_RX = res ? res.Characteristic_RX : null;

            // connectされた情報が取得できているか
            const Server = res ? res.Server : null;

            if (Characteristic_TX && Characteristic_RX && Server) {

                if (!Server || !Characteristic_TX || !Characteristic_RX) {
                    alert('Characteristicは、null\nbluetooth通信できませんでした');
                }
                setgatt(res_Choice);
                setCharacteristic({ ...characteristic, Characteristic_TX: Characteristic_TX, Characteristic_RX: Characteristic_RX });
                // setCharacteristic_RX(Characteristic_RX);
                setServer(Server);
                setColor('primary');
                setCount(1);
            } else {
                alert('接続できませんでした。');
            }

        } else if (count === 1) {  // bluetooth disconnect
            if (!server || !server.connected) {
                console.log('接続がされていないのでdisconnectできない');
                setOpen(false);
                return;
            }
            try {
                server.disconnect();
                setCharacteristic({ ...characteristic, Characteristic_TX: null, Characteristic_RX: null });
                setColor('default');
                setCount(0);

            } catch (message) {
                console.log(message);
            }
        }
        setOpen(false);
    }
    React.useEffect(() => {
        (() => {
            // console.log(count);
            if (count === 1) {
                async function BleConnectingTest() {
                    gatt.connect();
                    // console.log(server);
                    if (server.connected === false) {
                        clearInterval(BleConnectTestStart);
                        setCharacteristic({ ...characteristic, Characteristic_TX: null, Characteristic_RX: null });
                        setColor('default');
                        setCount(0);
                        console.log('intervalを止めます。');
                    }
                }
                const BleConnectTestStart = setInterval(async () => {
                    try {
                        BleConnectingTest();
                    } catch (err) {
                        console.log(err);
                    }
                }, 1000);
            }
        })();
    }, [characteristic, count, gatt, server]);
    return (
        <div>
            <div>
                <Backdrop className={classes.backdrop} open={open}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                <div className={classes.button}>
                    <Button
                        variant="contained"
                        onClick={IsConnect}
                        color={connectColor}
                        className={classes.buttonIcon}
                    >
                        < BluetoothIcon />
                    </Button>
                </div>
            </div>
            <div>
                {/* スマホ用 */}
                <MediaQuery query="(max-width: 767px)">
                    <div className={classes.gauge}>
                        {/* デバイス送信 */}
                        < RadialGauge characteristic={characteristic.Characteristic_TX} server={server.connected} />
                    </div>
                </MediaQuery>
                {/* pc用 */}
                <MediaQuery query="(min-width: 768px)">
                    <div className={classes.gauges}>
                        {/* デバイス送信 */}
                        < RadialGauge characteristic={characteristic.Characteristic_TX} server={server.connected} />
                    </div>
                </MediaQuery>
                {/* デバイス値受信 */}
                <div className={classes.tempData}>
                    < Sensor Characteristic_RX={characteristic.Characteristic_RX} title='Temp' />
                </div>
                {/* デバイス値受信 */}
                <div className={classes.Automatic}>
                    < SetCard characteristic_TX={characteristic.Characteristic_TX} server={server.connected} title='auto' />
                </div>
            </div>
        </div>
    );
}

export default SmartPhoneMain;