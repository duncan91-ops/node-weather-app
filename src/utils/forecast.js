const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=e9b5b41cedffc423d2fc3567965103e8&query=${latitude},${longitude}&units=f`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} fahrenheit out, It feels like ${body.current.feelslike} fahrenheit out`)
        }
    })
}

module.exports = forecast