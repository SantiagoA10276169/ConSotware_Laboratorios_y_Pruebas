const express = require('express');
const app = express();



const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

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
                <a class="navbar-item" href="/ruta">About</a>
                <a class="navbar-item" href="/spark">Summon Simulation</a>
                <a class="navbar-item" href="/braves">Brave Heroes</a>
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


//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const misuser = require('./routes/sign_in');
app.use('/', misuser);

app.post('/sign', (request, response) => {
    const { User, pass } = request.body;
    const data = `User: ${User}\nPassword: ${pass}\n\n`;

    fs.appendFile('user.txt', data, (err) => {
        if (err) {
            console.error('Error al guardar los datos:', err);
            return response.status(500).send('Error al guardar los datos');
        }
        response.send(`
            ${html_header}
            <h1 class="title">Registro Exitoso</h1>
            <p class="block">Los datos se han guardado correctamente.</p>
            ${html_footer}
        `);
    });
});

const misRuta = require('./routes/ruta');
app.use('/', misRuta);

const misRutas = require('./routes/rutas');
app.use('/', misRutas);


app.get('/', (request, response) => {
    console.log('Otro middleware!');
    response.send(`
            ${html_header}
    <!DOCTYPE html>
    <html class="has-text-centered">
    <head>
        <title> FIRE EMBLEM!</title> 
        <link rel="stylesheet" type="text/css" href="css/fe.css">
        
    </head>
    <body>
        
      
    
    <body class="FEH">
        <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
    >
        
       
        <h1>
            <!--<Video no carga en firefox probar en otro navegador>-->
            <strong class="title is-1" class="box" id="Til">  Fire Emblem Heroes</strong>
            <main>
            <div class="block">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/F50yHLa7kFU?si=8eL00vvo41LeDm1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2 id="lords" class="subtitle is-1">
                 Lords 
            </h2>
             
                <p>
                  <div class="is-flex is-align-items-center is-justify-content-center">
                    <header>
                        <ul class="is-flex is-flex-direction-column">
                            <li class="Ceada is-flex is-align-items-center" style="margin-bottom: 20px;">
                                <figure class="image is-128x128" style="margin-right: 20px; margin-top: 20px;">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fvsbattles%2Fimages%2Fa%2Fa4%2FMarth_Heroes2.png%2Frevision%2Flatest%3Fcb%3D20211027232956&f=1&nofb=1&ipt=542e459dab2a2cc149c815d7e03f619fd3f7c22e8b65d094f17c8a16b53296da&ipo=images">
                                </figure>
                                <div>
                                    <strong><span style="color: rgb(68, 68, 196);">Marth</span></strong> 
                                    <em>: Altean Prince</em>
                                </div>
                            </li> 
                
                            <li class="Mila is-flex is-align-items-center" style="margin-bottom: 20px;">
                                <figure class="image is-128x128" style="margin-right: 20px; margin-top: 20px;">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.miraheze.org%2Fgreatcharacterswiki%2Fthumb%2Fa%2Faf%2FCelica_Heroes.png%2F1200px-Celica_Heroes.png&f=1&nofb=1&ipt=5b9789746c2cd9b4c23492e27bd838af95d825553861c95e4f66eb637a7a501b&ipo=images">
                                </figure>
                                <div>
                                    <strong id="lords">Celica</strong>
                                    <em>: Caring Princess</em>
                                </div>
                            </li>
                
                            <li class="Duma is-flex is-align-items-center" style="margin-bottom: 20px;">
                                <figure class="image is-128x128" style="margin-right: 20px; margin-top: 20px;">
                                    <img src="https://static.miraheze.org/greatcharacterswiki/thumb/7/70/Alm_Heroes.png/1200px-Alm_Heroes.png">
                                </figure>
                                <div>
                                    <strong>Alm</strong>
                                    <em>: Hero of Prophecy</em>
                                </div>
                            </li>
                
                            <li class="Crusader is-flex is-align-items-center" style="margin-bottom: 20px;">
                                <figure class="image is-128x128" style="margin-right: 20px; margin-top: 20px;">
                                    <img src="https://static.miraheze.org/greatcharacterswiki/thumb/0/0b/Sigurd_Heroes.png/1200px-Sigurd_Heroes.png">
                                </figure>
                                <div>
                                    <strong>Sigurd</strong>
                                    <em>: Holy Knight</em>
                                </div>
                            </li>
                        </ul>
                    </header>
                </div>
                
                <p style="margin: 40px 0; text-align: center;">Braves. Choose your legends</p>
                
                <div class="is-flex is-align-items-center is-justify-content-center">
                    <header>
                        <ul class="is-flex is-flex-direction-column">
                            <li class="CYL1-H1 is-flex is-align-items-center" style="margin-bottom: 20px;">
                                <figure class="image is-128x128" style="margin-right: 20px; margin-top: 20px;">
                                    <img src="https://cdn.fireemblemwiki.org/thumb/1/18/FEH_Ike_Brave_Mercenary_01.png/487px-FEH_Ike_Brave_Mercenary_01.png?20170829042904">
                                </figure>
                                <div>
                                    <strong><span style="color: rgb(189, 160, 81);">Ike</span></strong> 
                                    <em>: Brave Mercenary</em>
                                </div>
                            </li> 
                
                            <li class="CYL1-L1 is-flex is-align-items-center" style="margin-bottom: 20px;">
                                <figure class="image is-128x128" style="margin-right: 20px; margin-top: 20px;">
                                    <img src="https://guide.fire-emblem-heroes.com/wp-content/uploads/lin_brave_lady_slide01.png" alt="Lyn">
                                </figure>
                                <div>
                                    <strong id="lords">Lyn</strong>
                                    <em>: Brave Lady</em>
                                </div>
                            </li>
                            
                            <li class="CYL1-H2 is-flex is-align-items-center" style="margin-bottom: 20px;">
                                <figure class="image is-128x128" style="margin-right: 20px; margin-top: 20px;">
                                    <img src="https://cdn.fireemblemwiki.org/thumb/8/86/FEH_Roy_Brave_Lion_01.png/478px-FEH_Roy_Brave_Lion_01.png?20170829042913">
                                </figure>
                                <div>
                                    <strong>Roy</strong>
                                    <em>: Brave Lion </em>
                                </div>
                            </li>
                
                            <li class="CYL2-H2 is-flex is-align-items-center" style="margin-bottom: 20px;">
                                <figure class="image is-128x128" style="margin-right: 20px; margin-top: 20px;">
                                    <img src="https://cdn.fireemblemwiki.org/thumb/6/60/FEH_Lucina_Brave_Princess_01.png/393px-FEH_Lucina_Brave_Princess_01.png?20170829042858">
                                </figure>
                                <div>
                                    <strong>Lucina</strong>
                                    <em>: Brave Princess </em>
                                </div>
                            </li>
                        </ul>
                    </header>
                </div>
                
                    
                        <h3 class="box mt-6">
                            Banner
                            <div class="has-text-centered">
                              <table class="table is-bordered" style="margin-left: auto; margin-right: auto;">
                                <thead>
                                    <tbody class="has-text-centered">
                                        <td>Heroes of Another Worlds 1</td>
                                        <td>Hero Fucus 1</td>
                                        <td>Hero Fucus 2</td>
                                        <td>Hero Fucus 3</td>
                                    </tbody>
    
                                    <tfoot>
                                        <td>5 Stars</td>
                                        <td>Marth ~ Altean Prince</td>
                                        <td>Celica ~ Caring Pincess</td>
                                        <td>Sigurd ~ Holy Knight</td>
    
                                    </tfoot>
    
    
                                </thead>
                             </table>
                             </div>
                            <div class="box">
                            <h4>
                                Time To summon!
                            </h4>
                            <button class="button is-info" id="bottom_Summon">Heroes of Another Worlds 1</button>
                             <div class="has-text-centered" style="margin-top: 20px;">
                              <figure class="" is-inline-block" >
                                <img width=40% id="Imagen_B1" src="" alt="" />
                              </figure>
                             </div>
                             <a class="button is-info" id="bottom_Summon_2" href="/spark">In Those We Hope</a>
                             <div class="has-text-centered" style="margin-top: 20px;">
                              <figure class="" is-inline-block" >
                                <img width=40% id="Imagen_B1" src="" alt="" />
                              </figure>
                             </div>
                          </div>
                        </h3>
                    </div>
                </p>
            </h2>
        </div>
            </main>
        </h1>
Inteligent System/Nintendo


    <!--<script src="js/introjs.js"></script>-->
    <script src="js/poe.js"></script>
});

    </body>
</html>
            ${html_footer}
        `);
});


app.use((request, response, next) => {
    response.status(404).send(`
             ${html_header}
        <header>
            <h1 class="title">404</h1>
        </header>
        <main>
            <br>
            <p class="block">
                FEH.......ZZZZZZ.....Plase....this route.....not exist....try again......ZZZ 
            </p>
            <figure class="image is-128x128">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamepedia.cursecdn.com%2Ffeheroes_gamepedia_en%2F2%2F23%2FFeh_BtlFace_C.png%3Fversion%3D818aa60378f104072bdf63cd192a0a08&f=1&nofb=1&ipt=01cdcd62f6a9ba463e975ff313f8a90215ddc783d9c9b46abc27fb51965b8e32&ipo=images" />
            </figure>
        ${html_footer}
    `);
})

app.listen(3000);