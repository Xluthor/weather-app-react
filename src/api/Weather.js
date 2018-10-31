import axios from 'axios'

class Weather {

    static get_weather(){

        const multiplyES6 = (x, y) => { return x * y };
        const ApiKey = '776d6f310e92c87bcdaed8a8db7960ec'
        const Lat = '9.9983'
        const Lon = '-84.1168'
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Lon}&units=metric&appid=${ApiKey}`
                   
        return axios({
            method: 'get',
            url: url
        }).then( (response)=> {     
            return response;
        }).catch( (error)=> {
            console.log("HUBO UN ERROR AL LLAMAR AL API", error)
        })
    }

    
}


export default Weather

