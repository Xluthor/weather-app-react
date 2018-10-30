import{ combineReducers } from 'redux'
import weatherData from './weatherReducers'

const rootReducer = combineReducers({
    weatherData
});
 
export default rootReducer;