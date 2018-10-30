import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as WeatherActions from '../../actions/weatherActions'

import TodayWeather from '../TodayWeather/TodayWeather'
import WeatherCard from '../WeatherCard/WeatherCard'
import {Wrapper} from './styles'


class WeatherUI extends React.Component{
    constructor( props ){
        super( props );
    }

    componentDidMount(){
        this.props.actions.getWeatherFromAPI()
    }
    
    render(){
        return(
            <div>
                <Wrapper>
                    <TodayWeather dataWeather ={this.props.weatherData} />
                    <WeatherCard  dataWeather ={this.props.weatherData}/> 

                </Wrapper>
            </div>
        )  
    }
}

const mapStateToProps = ( state )=> {
    return {
        weatherData: state.weatherData
    }
}

function mapDispatchToProps( dispatch ){
    return {
        actions: bindActionCreators( WeatherActions, dispatch )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( WeatherUI )

