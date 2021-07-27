import axios from 'axios';
import { store } from '../store'

export const getWeatherByCity = async (city) => {
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {q: `${city}`, units: 'imperial'},
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_OPEN_WEATHER_API_KEY,
            'x-rapidapi-host': process.env.REACT_APP_OPEN_WEATHER_API_HOST,
        }
    };

    let response = null;
    try {
        response = await axios.request(options);
    } catch(error) {
        response = error.response;
    } finally {
        return response;
    }
}

export const getWeatherByCoordinates = async (coordinates) => {
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {lat: coordinates.lat, lon: coordinates.long, units: 'imperial'},
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_OPEN_WEATHER_API_KEY,
            'x-rapidapi-host': process.env.REACT_APP_OPEN_WEATHER_API_HOST,
        }
    };

    let response = null;
    try {
        response = await axios.request(options);
    } catch(error) {
        response = error.response;
    } finally {
        return response;
    }
}

export const getForcastByCity = async (city) => {
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
        params: {q: `${city}`, units: 'imperial'},
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_OPEN_WEATHER_API_KEY,
            'x-rapidapi-host': process.env.REACT_APP_OPEN_WEATHER_API_HOST,
        }
    };

    let response = null;
    try {
        response = await axios.request(options);
    } catch(error) {
        response = error.response;
    } finally {
        return response;
    }
}