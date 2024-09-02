const express = require('express');
const router = express.Router();


router.get('/ruta', (request, response) => {
  response.render('about');
});

router.get('/sign', (request, response) => {
  response.render('sing_in');
});


module.exports = router;