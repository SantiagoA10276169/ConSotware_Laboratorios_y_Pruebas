const express = require('express');
const router = express.Router();

router.get('/ruta', (request, response, next) => {
    response.send('Labotatorios\Laboratorio_11\routes'); 
});

router.get('/ruta', (request, response, next) => {
    console.log('request.body');
});
router.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});

module.exports = router;