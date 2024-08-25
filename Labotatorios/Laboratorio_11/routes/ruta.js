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

const html_header = `
<!DOCTYPE html>
<html data-theme="light">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Fire Emblem</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
</head>
<body>
<nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://fire-emblem-heroes.com">
                <img src="https://upload.wikimedia.org/wikipedia/en/f/f6/Fire_Emblem_Heroes_logo.png" alt="Fire Emblem Heroes Logo">
            </a>
    
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="/">Inicio</a>
                <a class="navbar-item" href="/spark">Spark</a>
                <a class="navbar-item">4/3 Star Heroes</a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">Past Banners</a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">World of Mystery</a>
                        <a class="navbar-item is-selected">World of Conquest</a>
                        <a class="navbar-item">Spring Festival</a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">More</a>
                    </div>
                </div>
            </div>
    
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary" href="/sign"><strong>Sign up</strong></a>
                        <a class="button is-light">Log in</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <section class="section">
        <div class="container">
`;

const html_footer = `
        </div>
    </section>
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
                The source code is licensed
                <a href="https://opensource.org/license/mit">MIT</a>. The
                website content is licensed
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//">CC BY NC SA 4.0</a>.

                © Nintendo / INTELLIGENT SYSTEMS
            </p>
        </div>
    </footer>
</body>
</html>
`;


//Spark

router.get('/spark', (request, response, next) => {
    response.send(`
            ${html_header}
            <header>
                <h1 class="title">Selecciona un Orbe</h1>
            </header>
            <main>
                <form action="/spark" method="POST">
                    <div class="field">
                        <label class="label" for="nombre">Heroe</label>
                        <div class="control">
                            <input id="Fav" name="Fav" class="input" type="text" placeholder="Alfonse ~ Heir to Openness" required>
                        </div>
                    </div>

                    <div class="field">
                        <label for="Spark" class="label">Spark</label>
                        <div class="control">
                            <div class="select">
                                <select id="Spark" name="Spark">
                                    <option value="green">Green</option>
                                    <option value="red">Red</option> 
                                    <option value="blue">Blue</option> 
                                    <option value="grey">Grey</option> 
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="control">
                        <input type="submit" class="button is-link" value="Mostrar Imagen">
                    </div>
                </form>
            </main>
            ${html_footer}
        `); 
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
    response.send(`
        ${html_header}
        <img alt="${Focus[select_heroe].descripcion}" src="${Focus[select_heroe].imagen}">
        ${html_footer}
    `);


});

//about=ruta

router.get('/ruta', (request, response, next) => {
        response.send(`
                ${html_header}
                <main>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fire Emblem About</title>
    <!-- Enlace a Bulma CSS (si estás usando Bulma) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" type="text/css" href="css/fe.css">

    <section class="section">
        <div class="container">
            <!-- Contenido principal -->
            <div class="box">
                <h1 class="title">¿Qué es Fire Emblem?</h1>
                <p>La serie Fire Emblem es un juego de estrategia/rpg con profundos elementos tácticos, destacada por sus personajes y historias. Recuerda, cada decisión cuenta, ¿tienes las habilidades para salvar el día y lograr la victoria?</p>
            </div>
            <div class="block">
                <figure class="image is-16by9">
                    <iframe
                      class="has-ratio"
                      width="640"
                      height="360"
                      src="https://www.youtube.com/embed/s1J5D997Mkk?si=_aHzCYWTZYV2s2Qd"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen>
                    </iframe>
                </figure>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <!-- Segundo Contenido -->
            <div class="box">
                <h1 class="title has-text-centered has-text-danger">
                    Fire Emblem in Nintendo Switch!
                </h1>
                <h1 class= mt-4>
                <div class="is-flex is-justify-content-center is-align-items-center" style="margin-bottom: 20px;">
                    <figure class="image is-128x128" style="margin-right: 20px;">
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn02.nintendo-europe.com%2Fmedia%2Fimages%2F11_square_images%2Fgames_18%2Fnintendo_switch_5%2FSQ_NSwitch_FireEmblemThreeHouses.jpg&f=1&nofb=1&ipt=dce7a78ad2d5b83223057df6c2bf55a21791c79470c8da1f7c11447199a688b8&ipo=images" alt="Fire Emblem 3 Houses">
                    </figure>
                    <div>
                        <strong>Fire Emblem 3 Houses</strong>
                        <br>
                        <em>Nintendo Switch</em>
                    </div>
                </div>
                <p>La guerra se acerca al continente de Fódlan. Aquí, el orden lo mantiene la Iglesia de Seiros, la cual alberga en sus instalaciones principales a la prestigiosa Academia de Oficiales. Tú estás invitado a enseñar en una de sus poderosas casas, cada una de ellas integrada con estudiantes llenos de personalidad y representados por un monarca de uno de los tres territorios. En tu rol de profesor, deberás guiar a tus estudiantes a través de su vida académica y en combates en un juego de rol táctico por turnos, llenos de estrategia y obstáculos por superar. ¿Cuál casa y camino escogerás?</p>

                <figure class="image is-16by9">
                    <iframe
                      class="has-ratio"
                      width="640"
                      height="360"
                      src="https://www.youtube.com/embed/rkux5h0PeXo?si=G4qYPOh1laJo-Mab"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen>
                    </iframe>
                 </figure>
                 <div class="has-text-centered mt-4"> <!-- Centra el contenido y agrega margen superior -->
                    <button class="button is-yellow" href="https://www.nintendo.com/us/store/products/fire-emblem-three-houses-switch/">e-Shop</button>
                </div>
                </h1>
                <h1 class=mt-4>
                    <div class="is-flex is-justify-content-center is-align-items-center",  class= "mb-5" style="margin-bottom: 20px;">
                        <figure class="image is-128x128" style="margin-right: 20px;">
                            <img src="https://upload.wikimedia.org/wikipedia/en/f/f6/Fire_Emblem_Engage.jpg" alt="Fire Emblem Engage">
                        </figure>
                        <div>
                            <div>
                                <strong>Fire Emblem Enage</strong>
                                <br>
                                <em>Nintendo Switch</em>
                            </div>
                        </div>
                    </div>
                    <p>In a war against the Fell Dragon, four kingdoms worked together with heroes from other worlds to seal away this great evil. One-thousand years later, this seal has weakened and the Fell Dragon is about to reawaken. As a Divine Dragon, use rich strategies and robust customization to meet your destiny—to collect 12 Emblem Rings and bring peace back to the Continent of Elyos</p>
    
                    <figure class="image is-16by9">
                        <iframe
                          class="has-ratio"
                          width="640"
                          height="360"
                          src="https://www.youtube.com/embed/vAdUlQN8MNg?si=gaUfWZttNSS2fquZ"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen>
                        </iframe>
                    </figure>
                    <div class="has-text-centered mt-4"> <!-- Centra el contenido y agrega margen superior -->
                        <button class="button is-yellow" href="https://www.nintendo.com/us/store/products/fire-emblem-engage-switch/">e-Shop</button>
                    </div>
                </h1>

                <h1 class=mt-4>
                    <div class="is-flex is-justify-content-center is-align-items-center",  class= "mb-5" style="margin-bottom: 20px;">
                        <figure class="image is-128x128" style="margin-right: 20px;">
                            <img src="https://upload.wikimedia.org/wikipedia/en/a/ad/Fire_Emblem_Warriors_Three_Hopes.jpg" alt="Fire Emblem 3 Hopes">
                        </figure>
                        <div>
                            <div>
                                <strong>Fire Emblem Warriors: 3 Hopes</strong>
                                <br>
                                <em>Nintendo Switch</em>
                            </div>
                        </div>
                    </div>
                    <p>Step into the shoes of Shez as they join Edelgard, Dimitri, Claude, and other Fire Emblem™: Three Houses characters and fight for the future of Fódlan. Align with a leader to build and command an army in strategic 1-vs.-1,000-style battles. The house you choose will bring you through one of three compelling stories, each with a different outcome.</p>
    
                    <figure class="image is-16by9">
                        <iframe
                          class="has-ratio"
                          width="640"
                          height="360"
                          src="https://www.youtube.com/embed/w5TrSaoYmZ8?si=gSzgT6Xzho1jvU9G"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen>
                        </iframe>
                    </figure>
                    <div class="has-text-centered mt-4"> <!-- Centra el contenido y agrega margen superior -->
                        <button class="button is-yellow" href="https://www.nintendo.com/us/store/products/fire-emblem-warriors-three-hopes-switch/">e-Shop</button>
                    </div>
                </h1>
                    
                </div>
            </div>
        </section>
    </main>
                ${html_footer}
            `); 
    });
    

router.get('/ruta', (request, response, next) => {
    console.log('request.body');
});
router.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});

module.exports = router;


module.exports = router;