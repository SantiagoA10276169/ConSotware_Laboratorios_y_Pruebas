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
            <title>Chilaquiles</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
        </head>
        <body>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://tecfood.tec.mx/es/monterrey/chilaquiles-tec">
                        <img src="https://tecfood.tec.mx/sites/g/files/vgjovo1061/files/styles/de2e/public/2022-09/CCM-chilaquiles-logo.png?itok=3wX3kVxi">
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
                        <a href="/" class="navbar-item">
                        Inicio
                        </a>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary">
                                <strong>Registrarse</strong>
                                </a>
                                <a class="button is-light">
                                Iniciar sesión
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section class="section">
                <div class="container">
`;

const html_footer = `
                    </main>
                    <footer class="footer">
                        <div class="content has-text-centered">
                            <p>
                                <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
                                The source code is licensed
                                <a href="https://opensource.org/license/mit">MIT</a>. The
                                website content is licensed
                                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//"
                                >CC BY NC SA 4.0</a
                                >.
                            </p>
                        </div>
                    </footer>
                </div>
            </section>
        </body>
    </html>
`;

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const prepararRutas = require('./routes/preparar.routes');

app.use('/preparar', prepararRutas);

app.get('/', (request, response, next) => {
    console.log('Otro middleware!');
    response.send(`
        ${html_header}
        <header>
            <h1 class="title">Chilaquiles</h1>
        </header>
        <main>
            <br>
            <p class="block">
                <strong>¡hola mundo!</strong> 
                Los <span>chilaquiles</span> son <em>deliciosos</em>. 
            </p>
            <table class="table">
                <tbody>
                    <tr>
                        <td>Con salsa verde</td>
                        <td>Con salsa de chipotle</td>
                    </tr>
                    <tr>
                        <td>Crema, queso y aguacate</td>
                        <td>Crema, queso y aguacate</td>
                    </tr>
                </tbody>
                <tfoot>
                    <td>Nuestros mejores chilaquiles</td>
                </tfoot>
                <thead>
                    <tr>
                        <th>Chilaquiles verdes</th>
                        <th>Chilaquiles rojos</th>
                    </tr>
                </thead>
            </table>
            <a href="/preparar" class="button is-warning" id="boton_chilaquiles">Preparar orden</a>
            <button style="display:none" class="button is-success" id="boton_salsa_verde">Poner salsa verde</button>
            <button style="display:none" class="button is-warning" id="boton_suerte">Voy a tener suerte</button>
            <button style="display:none" class="button is-danger" id="boton_salsa_roja">Poner salsa roja</button>
            <br><br>
            <img width="40%" id="imagen_chilaquiles" src="" alt="" />
            <p>Anímate a probar suerte con los chilaquiles de la casa</p>
            <br><br>
            <h2 class="title">Comandos de git</h2>
            <ul>
                <li>git clone [repositorio]</li>
                <li>git add -A</li>
                <li>git commit -m "mensaje en tiempo imperativo"</li>
                <li>git checkout -b [nombre_rama]</li>
                <li>git push</li>
                <li>git pull</li>
                <li>git merge [rama_a_integrar]</li>
            </ul>
            ${html_footer}
    `); //Manda la respuesta
});

app.use((request, response, next) => {

    response.statusCode = 404;

    response.send(`
            ${html_header}
            <header>
                <h1 class="title">404 No hay chilaquiles</h1>
            </header>
            <main>
                <br>
                <p class="block">
                    Lo sentimos, los <span>chilaquiles</span> que estás buscando no se hacen aquí. 
                </p>
            ${html_footer}
        `);
})

app.listen(3000);