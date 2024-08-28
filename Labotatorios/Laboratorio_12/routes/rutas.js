const express = require('express');
const router = express.Router();

router.get('/brave', (request, response) => {
  response.render('breve');
});

router.get('/ruta', (request, response) => {
  response.render('about');
});

router.get('/sign', (request, response) => {
  response.render('sing_in');
});


module.exports = router;