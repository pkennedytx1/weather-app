import React, { useContext, useState } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import OpenWeatherIcon from '../OpenWeatherIcon';
import { store } from '../../store';
import { getForcastByCity } from '../../utils/fetchCityWeather';
import ForcastCard from '../ForcastCard'

const WeatherCard = (props) => {
    const { state } = useContext(store);
    const [forcastData, setForcastData] = useState([]);

    const handleGetForcast = async (city) => {
        let forcastData = await getForcastByCity("Dubai");
        setForcastData(forcastData.data.list);
    }

    console.log(forcastData);

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
                            <Button onClick={handleGetForcast} variant="contained" color="primary">Get 7 day forcast</Button>
                        </CardContent>
                    </Card>
                </Box>
            }
            {forcastData && forcastData.length > 0 &&
                forcastData.map((dailyForcast, i) => {
                    return(
                        <ForcastCard dailyForcast={dailyForcast} key={i} />
                    )
                })
            }
        </>
    )
}

export default WeatherCard;