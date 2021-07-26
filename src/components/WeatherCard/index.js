import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import OpenWeatherIcon from '../OpenWeatherIcon';
import { store } from '../../store'

const WeatherCard = (props) => {
    const { state } = useContext(store);

    return(
        <>
            {state.weatherData.data &&
                <Box sx={{ maxWidth: 275 }}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                The Weather Currently
                            </Typography>
                            <OpenWeatherIcon iconCode={state.weatherData.data.weather[0].icon}/>
                            <Typography variant="h5" component="div">
                                {state.weatherData.data.main && state.weatherData.data.main.temp}{'\u00b0'}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {state.weatherData.data.name && state.weatherData.data.name} County
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            }
        </>
    )
}

export default WeatherCard;