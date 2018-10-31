import React from 'react'
import {Image} from './styles'


class Icon extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Image src={`http://openweathermap.org/img/w/${this.props.dataW.icon}.png`} />
        )
    }
}

export default Icon