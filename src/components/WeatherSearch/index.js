import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getWeatherByCity, getForcastByCity } from '../../utils/fetchCityWeather';

const WeatherSearch = () => {
    const [city, setCity] = useState('');
    const [error, setError]  = useState("");
    const [showError, setShowError] = useState(false);

    const handleCitySearchSubmit = async () => {
        if (city === "") {
            setError("City Can Not Be Empty.");
            setShowError(true);
        } else {
            setError("");
            setShowError(false);
            let response = await getWeatherByCity(city);
            if (response.status === 404) {
                setError(response.data.message);
                setShowError(true);
            }
        }
    }
    return(
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <TextField
                error={showError}
                id="outlined-basic"
                onChange={(e) => {setCity(e.target.value)}}
                value={city}
                label="Search Weather"
                helperText={showError && error}
                variant="outlined" />
            <Button onClick={() => handleCitySearchSubmit()} variant="outlined">Search</Button>
        </Box>
    )
}

export default WeatherSearch;