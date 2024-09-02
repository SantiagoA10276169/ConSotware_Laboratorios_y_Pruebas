const fcontrol  = require('../models/focus.model');


exports.get_spark = (request, response, next) => {
    console.log('Ruta_js /spark');
    response.render('spark');
};

exports.post_spark = (request, response, next) => {
    const spark = request.body.Spark;


    let select_heroe = 0;

    if (spark == "green") {
        select_heroe = 0;
    } else if (spark == "red") {
        select_heroe = 1;
    } else if (spark == "blue") {
        select_heroe = 2;
    } else if (spark == "grey") {
        select_heroe = 3;
    }




    focus = fcontrol.fetchAll();

    response.render('sparker.ejs', {

        alt: focus[select_heroe].descripcion,
        src: focus[select_heroe].imagen,

    });


    
};
