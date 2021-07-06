const router = require("express").Router();
const user = require('../controller/user');
const magazin=require('../controller/magazin');
const post = require('../controller/post')

router.post('/SignUp', user.SignUp);
router.post('/createMagazin/:idUser',magazin.createMagazin)
router.get('/SignIn/:id', user.SignIn)
router.delete('/deleteMagazin/:name', magazin.deleteMagazin);
router.get('/findMagazin/:name', magazin.findMagazin);
router.post('/createPost/:idMagazin' , post.createPost);
router.get('/getPosts/:id' , post.getPosts);
router.get('/getPost' , post.getPost);



module.exports = router