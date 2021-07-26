import React, { createContext, useReducer } from 'react';

const initialState = {
    weatherData: null,
    defaultCoordinates: {
        lat: 0,
        long: 0,
    },
}

export const store = createContext(initialState);

const { Provider } = store;

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        const currentState = { ...state };
        switch(action.type) {
            case "SET_WEATHER_DATA":
                currentState.weatherData = action.payload
                return currentState;
            case "SET_COORDINATES":
                currentState.defaultCoordinates = action.payload
                return currentState;
            case"CLEAR_WEATHER_DATA":
                currentState.weatherData = null
                return currentState;
            default:
                throw new Error("Invalid reducer action.")
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>
}   