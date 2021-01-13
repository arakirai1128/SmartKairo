import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';


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
        position: 'relative',
        float: 'right',
    },
    btnName: {
        textAlign: 'center',
    }
}));


interface SetInformation {
    title: string,
    characteristic_TX: any,
    server: any,
}

const SetCard = (props: SetInformation) => {

    const classes = useStyles();

    const characteristic_TX:any = props.characteristic_TX;
    const Server:boolean = props.server;

    const [selectedValue, setSelectedValue] = React.useState<any>('on');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        if(characteristic_TX){
            // console.log(event.target.value);
            const data:string = event.target.value;
    
            const arrayBuffe:Uint8Array = new TextEncoder().encode(data);
                
            characteristic_TX.writeValue(arrayBuffe);
            setSelectedValue(data);

            sessionStorage.setItem('kvs', data);

        }
        return;
    };
    React.useEffect(() => {
        if(!Server){
            const SelectValue = 'on';
            sessionStorage.setItem('kvs', SelectValue);
            setSelectedValue('on');
        }
    }, [Server]);
    return (
        <Card>
            <CardHeader className={classes.header}
                title={props.title}
            />
            <CardContent>
                <Typography className={classes.btnName} variant="body2" color="textSecondary" component="div">
                    {Server ?
                        <div>
                            ON :
                            <Radio
                                checked={selectedValue === 'on'}
                                onChange={handleChange}
                                value="on"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'on' }}
                            />
                            OFF :
                            <Radio
                                checked={selectedValue === 'off'}
                                onChange={handleChange}
                                value="off"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'off' }}
                            />
                        </div>
                        :
                        <div>
                            ON :
                            <Radio
                                checked={selectedValue === 'on'}
                                value="on"
                                disabled
                            />
                            OFF :
                            <Radio
                                checked={selectedValue === 'off'}
                                value="off"
                                disabled
                            />
                        </div>
                    }
                </Typography>
            </CardContent>
        </Card>
    );
}

export default SetCard;