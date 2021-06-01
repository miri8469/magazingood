const router = require("express").Router();
const user = require('../controller/user');
const magazin = require('../controller/magazin');
const category = require('../controller/categoriesController');
//user
router.post('/SignUp', user.SignUp);
router.post('/createMagazin/:userName', magazin.createMagazin)
// router.get('/loginUser/:id', user.loginUser);
//router.get('/MyJwt/:name',user.MyJwt);


// category
router.post('/createCategory/', category.createCategory)


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