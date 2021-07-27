import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import OpenWeatherIcon from '../OpenWeatherIcon';

const ForcastCard = (props) => {
    console.log(props)
    const {
        dt,
        temp: {
            max,
            min,
        },
    } = props.dailyForcast
    const date = new Date(dt*1000).toLocaleDateString();
    return(
        <>
            <Box sx={{ maxWidth: 275 }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {date}
                        </Typography>
                        <Typography variant="h5" component="div">
                            Max Temp {max}{'\u00b0'} Low Temp: {min}{'\u00b0'}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            County Name
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default ForcastCard;