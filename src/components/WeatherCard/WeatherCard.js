import React from 'react'
import { Card } from './styles'
import WeatherTemp from '../WeatherTemp/WeatherTemp'
import WeatherText from '../WeatherText/WeatherText'
import Icon from '../Icon/Icon'

class WeatherCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card-parent">
                {this.props.dataWeather.slice(1, 5).map((fetchedData, index) => {
                    return (
                        <Card>
                            <WeatherText dataW={fetchedData} />
                            <Icon dataW={fetchedData} />
                            <WeatherTemp dataW={fetchedData} />
                        </Card>
                    )
                })}
            </div>
        )
    }
}

export default WeatherCard