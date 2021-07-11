import React, {Component} from 'react';
import axios from 'axios';
import OpenWeatherIcon from '../../components/OpenWeatherIcon';

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
                <OpenWeatherIcon iconCode={weather && weather.length > 0 && weather[0].icon}/>
                <h3>{name && name} County</h3>
                <h1>{main && main.temp}{'\u00b0'}</h1>
            </>
        )
    }
}