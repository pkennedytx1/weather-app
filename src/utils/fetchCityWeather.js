import axios from 'axios';

const getWeatherByCity = (city) => {
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {q: `${city}`, units: 'imperial'},
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_OPEN_WEATHER_API_KEY,
            'x-rapidapi-host': process.env.REACT_APP_OPEN_WEATHER_API_HOST,
        }
    };

    axios.request(options).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
}

export default getWeatherByCity;