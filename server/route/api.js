const router = require("express").Router();
const user = require('../controller/user');
const magazin=require('../controller/magazin');
//user
router.post('/SignUp', user.SignUp);
router.post('/createMagazin',magazin.createMagazin)
// router.get('/loginUser/:id', user.loginUser);
//router.get('/MyJwt/:name',user.MyJwt);

//Admin
// router.post('/addAdmin', Admin.addAdmin)
// router.delete('/deleteUserByAdmin/:userId', Admin.deleteUserByAdmin)
// router.get('/loginAdmin/:id', Admin.loginAdmin)
// router.get('/getAllUserByAdmin/:adminId', Admin.getAllUserByAdmin)
//Weather
// router.get('/getWeather', Weather.getWeather);
// router.get('/getAllWeatherByUser/:id', Weather.getAllWeatherByUser);
// router.delete('/deleteWeather/:weatherId', Weather.deleteWeather);



module.exports = router