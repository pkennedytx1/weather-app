import React, { useContext, useEffect } from 'react';
import WeatherCard from '../../components/WeatherCard';
import WeatherSearch from '../../components/WeatherSearch';
import { store } from '../../store';
import { getWeatherByCoordinates } from '../../utils/fetchCityWeather'


const MainPage = (props) => {
    const { state, dispatch } = useContext(store);

    // Mimicing componentDidMount
    useEffect(() => {
        getCurrentLocation()
    }, []);

    // Listening for defaultCoordinates to be updated
    useEffect(() => {
        async function getByCoord() {
            const response = await getWeatherByCoordinates(state.defaultCoordinates);
            dispatch({ type: "SET_WEATHER_DATA", payload: response});
        }
        getByCoord();
    }, [state.defaultCoordinates, dispatch])

    // function to grab coordinates
    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                dispatch({
                    type: "SET_COORDINATES",
                    payload: {
                        lat: position.coords.latitude,
                        long: position.coords.longitude,
                    }
                })
            });
        }
    }

    return(
        <>
            {state.weatherData && <WeatherCard />}
            <WeatherSearch />
        </>
    )
    
}

export default MainPage;