const router = require('express').Router();
const category = require('../controller/categoryController');

router.post('/creatCategory/:magazinId',category.creatCategory)

module.exports =router