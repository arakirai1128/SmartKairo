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

    const characteristic_TX: any = props.characteristic_TX;
    const Server: boolean = props.server;

    const [selectedValue, setSelectedValue] = React.useState<string>('-1');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (characteristic_TX) {

            try {
                const data: string = event.target.value;

                if(data === '-1'){
                    console.log(data);
                    const arrayBuffe: Uint8Array = new TextEncoder().encode(data);
                    console.log(arrayBuffe);
    
                    characteristic_TX.writeValue(arrayBuffe);
                    setSelectedValue(data);
    
                    sessionStorage.setItem('auto', data);      
                } else {
                    const arrayBuffe: Uint8Array = new TextEncoder().encode(data);
                    console.log(arrayBuffe);
                    console.log(data);
                    setSelectedValue(data);
                    sessionStorage.setItem('auto', data);    
                }

            } catch (e) {
                console.error(e);
            }

        }
        return;
    };
    React.useEffect(() => {
        if (!Server) {
            const SelectValue = '-1';
            sessionStorage.setItem('auto', SelectValue);
            setSelectedValue('-1');
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
                                checked={selectedValue === '-1'}
                                onChange={handleChange}
                                value="-1"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': '-1' }}
                            />
                            OFF :
                            <Radio
                                checked={selectedValue === '0'}
                                onChange={handleChange}
                                value="0"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': '0' }}
                            />
                        </div>
                        :
                        <div>
                            ON :
                            <Radio
                                checked={selectedValue === '-1'}
                                value="-1"
                                disabled
                            />
                            OFF :
                            <Radio
                                checked={selectedValue === '0'}
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