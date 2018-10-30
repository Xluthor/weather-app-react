import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function weatherReducer(state = initialState.weatherData, action){
   
    switch(action.type){
        case types.GET_API:
        return state.concat(action.weather)
        default: return state;
       

    }
   
}