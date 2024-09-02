const Modelo = require('../models/day.model');


exports.get_brave = (request, response, next) => {
    response.render('brave', {
        src: '', // Valor predeterminado vacío
        alt: '', // Valor predeterminado vacío
    });
};
exports.post_brave = (request, response, next) => {
   
    const summons = Modelo.fetchAll();

    const num_summon = Math.floor(Math.random() * summons.length); // Cambiado a `summons.length`

    const selectedSummon = summons[num_summon]; 

    response.render('brave', { 
        alt: selectedSummon.description,
        src: selectedSummon.imagen,
    });
};

const objetos = Modelo.fetchAll();