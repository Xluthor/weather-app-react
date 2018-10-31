import * as types from './actionTypes'
import Weathers from '../api/Weather'

export function getWeather(weather) {
    return (dispatch) => {
        dispatch({ type: types.GET_API, weather })
    }
}

export function getWeatherFromAPI() {
    return (dispatch) => {
        Weathers.get_weather().then((response) => {
        
            const filterApi = response.data.list.filter((elem, pos, arr) => elem.dt_txt.includes('15:00:00'))

            filterApi.map((clima, index) => {

                let weather = {
                    id: index,
                    temp: clima.main.temp,
                    day: clima.dt_txt,
                    description: clima.weather[0].description,
                    type: clima.weather[0].main,
                    icon: clima.weather[0].icon
                }
                dispatch({ type: types.GET_API, weather })
            })
        })
    }
}
