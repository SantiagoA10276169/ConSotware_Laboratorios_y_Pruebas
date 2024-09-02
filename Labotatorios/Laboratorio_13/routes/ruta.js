const express = require('express');
const router = express.Router();

const spark_controller = require('../controller/spark.controller');

//get

router.get('/spark', spark_controller.get_spark);


//Post


router.post('/spark', spark_controller.post_spark);

module.exports = router;