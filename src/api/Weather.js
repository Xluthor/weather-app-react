import axios from 'axios'

class Weather {

    static get_weather(){

        const ApiKey = '776d6f310e92c87bcdaed8a8db7960ec'
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Long}&units=metric&appid=${ApiKey}`
                   
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

