import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import OpenWeatherIcon from '../OpenWeatherIcon';

export default function WeatherCard(props) {
    const {
        main,
        iconCode,
        name,
    } = props;
    return(
        <Box sx={{ maxWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        The Weather Currently
                    </Typography>
                    <OpenWeatherIcon iconCode={iconCode}/>
                    <Typography variant="h5" component="div">
                        {main && main.temp}{'\u00b0'}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {name && name} County
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}