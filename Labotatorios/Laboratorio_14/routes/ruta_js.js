const express = require('express');
const router = express.Router();



const spark_controller = require('../controller/spark.controller');
const day_Controller = require('../controller/day.controller');
const users_controller = require('../controller/users.controller');
const info_controller = require('../controller/info.controller');
const home_controller = require('../controller/home.controller');


router.get('/spark', spark_controller.get_spark);


//Post

router.post('/spark', spark_controller.post_spark);

//brave


const dayController = require('../controller/day.controller');

router.get('/brave', dayController.get_brave);

router.post('/brave', dayController.post_brave); 



//LOG_IN

router.get('/login', users_controller.get_login);

router.post('/login', users_controller.post_login);

router.get('/logout', users_controller.get_logout);

module.exports = router;
  
//about


const infoController = require('../controller/info.controller');

router.get('/info', info_controller.get_info);

router.post('/info', info_controller.post_info); 

//home


const homeController = require('../controller/home.controller');

router.get('/', home_controller.get_home);

router.post('/', home_controller.post_home); 