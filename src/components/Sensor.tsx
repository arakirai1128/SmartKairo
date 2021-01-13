import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
    header: {
        textAlign: 'center',
        padding: '12px 0px 5px 0px',
        backgroundColor: '#f0f0f0',
    },
    icon_Placement: {
        margin: '0px 0px 0px 20px',
        fontSize: 50,
        color: 'black',
    },
    num_name: {
        fontSize: 25,
        textAlign: 'center',
    },
}));



interface SetInformation {
    title: string,
    Characteristic_RX: any,
}


const Sensor = (props: SetInformation) => {

    const classes = useStyles();

    const Characteristic_RX = props.Characteristic_RX;

    const [notify_data, setNottify] = React.useState<number|string>(0);

    React.useEffect(() => {
        (async () => {
            if (Characteristic_RX) {
                const chara = await Characteristic_RX.startNotifications();
                chara.addEventListener('characteristicvaluechanged', (event: any) => {
                    let value = event.target.value;
                    const notifVal:string = new TextDecoder('utf-8').decode(value);
                    // デバイスからデータ受信
                    setNottify(notifVal);
                });
            } else {
                setNottify(0);
                return;
            }
        })();
    }, [Characteristic_RX]);
    return (
        <div>
            <Card>
                <CardHeader className={classes.header}
                    title={props.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="div">
                        <div className={classes.num_name}>
                            {`${notify_data}℃`}
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Sensor;