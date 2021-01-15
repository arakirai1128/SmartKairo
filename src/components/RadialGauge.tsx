import React from 'react';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { makeStyles } from '@material-ui/core/styles';

IgrRadialGaugeModule.register();

const useStyles = makeStyles((theme: any) => ({
    root: {
        position: 'relative',
        bottom: 120,
        left: 209,
        fontSize: 27,

    }
}));

const RadialGauge = (props: any) => {

    const classes = useStyles();

    const characteristic = props.characteristic;
    const server:boolean = props.server;

    const [value, setValue] = React.useState<string|number>(0);
    const [Invalidation, setInvalidation] = React.useState<boolean>(false);
    const [automaticOperation, setAutomaticOperation] = React.useState<string>('-1');

    const send = async (newValue: any) => {

        try {
            if (characteristic === null || !server) {
                // console.log("connectされていない");
                return;
            } else if (characteristic && server) {
                
                const data:number = Math.floor(newValue.value);

                const datas:string = String(data);

                let auto:string|null = sessionStorage.getItem('auto');

                if (auto === '-1') {
                    setValue(data);
                    setAutomaticOperation(auto);

                    // alert('自動操作設定になっているので温度設定できません');
                    return;
                } else if (auto === '0') {
                    setAutomaticOperation(auto);
                    setValue(datas);
                    var arrayBuffe:Uint8Array = new TextEncoder().encode(datas);

                    await characteristic.writeValue(arrayBuffe);
                }
            }
        } catch {
            return;
        }
    }
    React.useEffect(() => {

        if (server && characteristic) {
            setInvalidation(true);
        } else if(!server && !characteristic){
            setInvalidation(false);
            setValue(0);
        }
        if (automaticOperation === '-1' && value >= 0) {
            setValue(0);
        }

    }, [automaticOperation, characteristic, server, value]);
    return (
        <div>
            <IgrRadialGauge
                valueChanged={send}
                value={value}
                isNeedleDraggingEnabled={Invalidation}
                // isNeedleDraggingConstrained={true}
                needleShape="NeedleWithBulb"
                needleBrush="DodgerBlue"
                needleOutline="DodgerBlue"
                needleEndExtent={0.475}
                needleStrokeThickness={1}
                needlePivotShape="CircleOverlay"
                needlePivotBrush="#9f9fa0"
                needlePivotOutline="#9f9fa0"
                needlePivotWidthRatio={0.2}
                needlePivotStrokeThickness={1}
                height="410px" width="440px"
                minimumValue={0}
                maximumValue={100} interval={10}>
            </IgrRadialGauge>
            <div className={classes.root}>
                {value} <span style={{ fontSize: 12 }}>%</span>
            </div>
        </div>
    )
}
export default RadialGauge;