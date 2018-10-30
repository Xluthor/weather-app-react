import React from 'react'
import {WText} from './styles'
import moment from 'moment'

class WeatherText extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <WText className="tet">{moment(new Date(this.props.dataW.day)).format('dddd')}</WText> 
        )
    }
}
export default WeatherText