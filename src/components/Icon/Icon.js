import React from 'react'
import {Image} from './styles'


class Icon extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <p><Image className={`wi-owm-${this.props.dataW.icon}`} /></p>
        )
    }
}

export default Icon