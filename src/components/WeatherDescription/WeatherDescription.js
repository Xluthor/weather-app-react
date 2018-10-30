import React from 'react'
import {WDescription} from './styles'

class WeatherDescription extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <WDescription className="description">{this.props.dataW.description}</WDescription> 
        )
    }
}
export default WeatherDescription