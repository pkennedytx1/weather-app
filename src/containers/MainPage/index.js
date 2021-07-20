import React, {Component} from 'react';
import axios from 'axios';
import WeatherCard from '../../components/WeatherCard';
import WeatherSearch from '../../components/WeatherSearch';

export default class MainPage extends Component {
    constructor() {
        super()
        this.state={
            weatherData: {}
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/weather',
            params: {lat: this.props.coordinates.lat, lon: this.props.coordinates.long, units: 'imperial'},
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_OPEN_WEATHER_API_KEY,
                'x-rapidapi-host': process.env.REACT_APP_OPEN_WEATHER_API_HOST,
            }
        };

        // Reminder to talk about binding
        axios.request(options).then((response) => {
            this.setState({
                weatherData: response.data
            })
        }).catch(function (error) {
            console.error(error);
        });
    }

    render() {
        const { weatherData: {
            main,
            name,
            weather
        }} = this.state;

        return(
            <>
                <WeatherSearch />
                <WeatherCard iconCode={weather && weather.length > 0 && weather[0].icon} main={main && main} weather={weather && weather} name={name && name}/>
            </>
        )
    }
}