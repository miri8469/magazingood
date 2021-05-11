const router = require("express").Router();
const user = require('../controller/user')
const Admin = require('../controller/admin')
const Weather = require('../controller/weather')


//user
router.post('/signUp', user.signUp);
router.get('/loginUser/:id', user.loginUser);
//router.get('/MyJwt/:name',user.MyJwt);

//Admin
router.post('/addAdmin', Admin.addAdmin)
router.delete('/deleteUserByAdmin/:userId', Admin.deleteUserByAdmin)
router.get('/loginAdmin/:id', Admin.loginAdmin)
router.get('/getAllUserByAdmin/:adminId', Admin.getAllUserByAdmin)
//Weather
router.get('/getWeather', Weather.getWeather);
router.get('/getAllWeatherByUser/:id', Weather.getAllWeatherByUser);
router.delete('/deleteWeather/:weatherId', Weather.deleteWeather);



module.exports = router