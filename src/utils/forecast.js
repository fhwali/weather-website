const request = require ('request')

const forecast = (latitude, longitude, callback) => {

const url = 'http://api.weatherstack.com/current?access_key=de5f89956bbd944a0b817f1d58fee972&query=' + latitude + ',' + longitude
    request({ url: url, json: true }, (error, response) => {
            
            if (error) {
                callback('Unable to connect to weather services', undefined)
            } else if (response.body.error) {
                callback('Unable to find location', undefined)
            } else {
                callback(undefined, 'CURRENT WEATHER: ('+response.body.current.weather_descriptions+
                ') It is ' +response.body.current.temperature +'C outside. It feels like '
                +response.body.current.feelslike + 'C. Humidity Level is ' 
                +response.body.current.humidity+ '% and visibility is '
                +response.body.current.visibility+ 'Km. There is '
                +response.body.current.precip+ '% chance of rain')
            }
            
        })

    }
        


module.exports = forecast