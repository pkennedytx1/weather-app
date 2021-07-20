import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import getWeatherByCity from '../../utils/fetchCityWeather';

const WeatherSearch = () => {
    const [city, setCity] = useState('Help');
    const [error, setError]  = useState("");
    const [showError, setShowError] = useState(false);

    const handleCitySearchSubmit = () => {
        if (city === "") {
            setError("City Can Not Be Empty.");
            setShowError(true);
        } else {
            setError("");
            setShowError(false);
            getWeatherByCity(city);
        }
    }
    return(
        <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
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
            <Button onClick={() => handleCitySearchSubmit()} variant="outlined">Outlined</Button>
        </Box>
    )
}

export default WeatherSearch;