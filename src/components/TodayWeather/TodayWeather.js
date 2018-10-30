import React from 'react'
import { TWeather } from './styles'
import WeatherTemp from '../WeatherTemp/WeatherTemp'
import WeatherText from '../WeatherText/WeatherText'
import WeatherDescription from '../WeatherDescription/WeatherDescription'
import Icon from '../Icon/Icon'

class TodayWeather extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="today-parent">
                {this.props.dataWeather.slice(0, 1).map((fetchedData, index) => {
                    return (
                        <TWeather>
                            <WeatherText dataW={fetchedData} />
                            <WeatherTemp dataW={fetchedData} />
                            <Icon dataW={fetchedData} />
                            <WeatherDescription dataW={fetchedData} />
                        </TWeather>
                    )
                })}
            </div>
        )
    }
}

export default TodayWeather;

