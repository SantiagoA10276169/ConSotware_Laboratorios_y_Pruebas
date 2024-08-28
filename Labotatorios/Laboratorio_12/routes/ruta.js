const express = require('express');
const router = express.Router();

const Focus = [
    {
    descripcion: "Alfonse ~ Heir to Openness", 
    imagen: "https://guide.fire-emblem-heroes.com/wp-content/uploads/alfons_heir_to_openness_slide01.png",
    },
    {
    descripcion: "Felix ~ Sword Savant", 
    imagen: "https://guide.fire-emblem-heroes.com/wp-content/uploads/felix_sword_savant_slide01.png",
    },
    {
     descripcion: "Bernadetta ~ Sheltered Loner", 
     imagen: "https://guide.fire-emblem-heroes.com/wp-content/uploads/bernadeta_sheltered_loner_slide01.png",
    },
    {
    descripcion: "Robin ~ Exalt s Right Hand", 
    imagen: "https://guide.fire-emblem-heroes.com/wp-content/uploads/reflet_exalts_right_hand_slide01.png",
   }
]

//Spark

router.get('/spark', (request, response, next) => {
    console.log('Ruta /spark');
    response.render('spark'); 
});

router.post('/spark', (request, response, next) => {
    console.log(request.body);


    const spark = request.body.Spark;  


    let select_heroe = 0;

    if (spark == "green") {
        select_heroe = 0;
    } else if (spark == "red") {
        select_heroe = 1;
    } else if (spark == "blue"){
        select_heroe = 2;
    }
    else if (spark == "grey") {
        select_heroe = 3;
    }

     response.render('sparker.ejs', {
        alt: Focus[select_heroe].descripcion,
        src: Focus[select_heroe].imagen,
    });
});


module.exports = router;