const fcontrol = require('../models/focus.model');

exports.get_spark = (request, response, next) => {
    const cookies = request.get('Cookie');

    let ultimo_Heroe = '';
    let imagen = '';

    console.log(cookies);

    
    if (cookies) {
        const cookieArray = cookies.split(';').map(cookie => cookie.trim());

        
        const heroCookie = cookieArray.find(cookie => cookie.startsWith('Hero_CyL8='));
        const imageCookie = cookieArray.find(cookie => cookie.startsWith('imagen='));

        if (heroCookie) {
            ultimo_Heroe = heroCookie.split('=')[1];
        }
        
        if (imageCookie) {
            imagen = imageCookie.split('=')[1];
        }
    }

    
    response.render('spark', {
        username: request.session.username || '',
        ultimo_Heroe: ultimo_Heroe,
        imagen: imagen
    });
};

exports.post_spark = (request, response, next) => {
    const spark = request.body.Spark;

    let select_heroe = 0;

    
    switch (spark) {
        case "green":
            select_heroe = 0;
            break;
        case "red":
            select_heroe = 1;
            break;
        case "blue":
            select_heroe = 2;
            break;
        case "grey":
            select_heroe = 3;
            break;
        default:
            select_heroe = 0;
    }

    
    const focus = fcontrol.fetchAll();

    
    if (focus && focus.length > 0 && select_heroe < focus.length) {
        response.setHeader('Set-Cookie', [
            `Hero_CyL8=${focus[select_heroe].descripcion}`,
            `imagen=${focus[select_heroe].imagen}`
        ]);
    } else {
        response.status(500).send('Error en la selección del héroe');
        return;
    }

    
    response.render('sparker', {
        username: request.session.username || '',
        alt: focus[select_heroe]?.descripcion || '',
        src: focus[select_heroe]?.imagen || '',
    });
};
