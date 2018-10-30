import React from 'react'
import ReactDOM from 'react-dom'
import WeatherUI from './components/WeatherUI/WeatherUI'
import './Weather.css';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

const store = configureStore();

class ComponenteInicial extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
           <WeatherUI/> 
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <ComponenteInicial />
    </Provider>
   ,
    document.getElementById('root')
);