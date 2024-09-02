const express = require('express');
const router = express.Router();



//spark
const spark_controller = require('../controller/spark.controller');
const day_Controller = require('../controller/day.controller');
//get

router.get('/spark', spark_controller.get_spark);


//Post

router.post('/spark', spark_controller.post_spark);

//day y brave


const dayController = require('../controller/day.controller');

router.get('/brave', dayController.get_brave);

router.post('/brave', dayController.post_brave); 

module.exports = router;

