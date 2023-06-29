import { SET_WEATHER_DATA } from "../type/types";

export const setWeatherData = (data) => ({
    type: SET_WEATHER_DATA,
    payload: data
})