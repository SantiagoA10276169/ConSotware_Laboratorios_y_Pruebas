const express = require('express');
const router = express.Router();

const spark_controller = require('../controller/spark.controller');
const Hero_controller = require('../controller/Hero.controller');
const day_Controller = require('../controller/day.controller');
const users_controller = require('../controller/users.controller');
const info_controller = require('../controller/info.controller');
const home_controller = require('../controller/home.controller');

// Rutas de Hero
router.get('/Hero', Hero_controller.get_Hero);
router.post('/Hero', Hero_controller.post_Hero);

// brave
router.get('/brave', day_Controller.get_brave);
router.post('/brave', day_Controller.post_brave);

// LOG_IN
router.get('/login', users_controller.get_login);
router.post('/login', users_controller.post_login);
router.get('/logout', users_controller.get_logout);

// about
router.get('/info', info_controller.get_info);
router.post('/info', info_controller.post_info);

// home
router.get('/', home_controller.get_home); 
 

//spark

router.get('/spark', spark_controller.get_spark);
router.post('/spark', spark_controller.post_spark);


module.exports = router;
