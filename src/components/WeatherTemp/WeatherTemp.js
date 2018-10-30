import React from 'react'
import {WTemp} from './styles'

class WeatherTemp extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <WTemp>{Math.round(this.props.dataW.temp)}°</WTemp> 
        )
    }
}
export default WeatherTemp;