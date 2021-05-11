const request = require('request')
const User = require('../model/user')
const weather = require('../model/weather')

const requestApi = (city) => {
    return new Promise((resolve, reject) => {
        let options = {
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e302357102d866dca9fb317a55d3925a`
        }
        request(options, function (err, res, body) {
            if (err) {
                reject(err)
            }
            else
                resolve(body)
        })
    })
}
const getWeather = (req, res) => {
    requestApi(req.body.city).then(result => {
        console.log(result);
        const data = JSON.parse(result)
        const MyWeather = new weather({
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            wind: {
                speed: data.wind.speed,
                deg: data.wind.deg
            },
            userId: req.body._id
        })
        console.log(result)
        MyWeather.save().then(wtr => {
            User.findByIdAndUpdate(req.body._id, { $push: { 'weatherId': wtr._id } }).then(() => {
                console.log('weather added for user!')
                res.send(wtr)
            }).catch(err => {
                console.log(err);
            })
        })
    }).catch(err => {
        console.log('error Weather', err);
    })
}

//שולף את כל החיפושי מזג אויר של יוזר מסויים
const getAllWeatherByUser = (req, res) => {
    console.log(req.params.id);
    User.findById(req.params.id).populate({ path: "weatherId", select: "_id" }).then((weather) => {
        console.log(weather);
        res.json(weather)
    }).catch(err => {
        console.log(err);
    })

}
const deleteWeather = (req, res) => {
    console.log(req.params.weatherId);
    weather.findByIdAndDelete(req.params.weatherId).then(w => {
        console.log(w);
        User.findByIdAndUpdate(w.userId, { $pull: { 'weatherId': w._id } }).then((w2) => {
            res.json({ w2: w2 });
        }).catch(err => {
            console.log(err);
        })
        console.log('weather deleted!');
    }).catch(err => {
        console.log(err);
    })
}


module.exports = { getWeather, getAllWeatherByUser, deleteWeather }