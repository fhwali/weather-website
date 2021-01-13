const request = require ('request')

const forecast = (latitude, longitude, callback) => {

const url = 'http://api.weatherstack.com/current?access_key=de5f89956bbd944a0b817f1d58fee972&query=' + latitude + ',' + longitude
    request({ url: url, json: true }, (error, response) => {
            
            if (error) {
                callback('Unable to connect to weather services', undefined)
            } else if (response.body.error) {
                callback('Unable to find location', undefined)
            } else {
                callback(undefined, '('+response.body.current.weather_descriptions +') It is currently ' 
                +response.body.current.temperature +'C outside. It feels like '
                +response.body.current.feelslike + 'C with '
                +response.body.current.precip+ '% chance of rain')
            }
            
        })

    }
        


module.exports = forecast