const express = require('express');

const router = express.Router();

const chilaquiles = [
    {
        descripcion: "Chilaquiles en salsa verde", 
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/1626/3018.jpg",
    },
    {
        descripcion: "Chilaquiles en salsa roja", 
        imagen: "https://cdn0.recetasgratis.net/es/posts/6/9/0/chilaquiles_rojos_con_pollo_75096_orig.jpg",
    },
    {
        descripcion: "Chilaquiles en salsa de chipotle",
        imagen: "https://www.gastrolabweb.com/u/fotografias/m/2021/1/20/f608x342-7419_37142_5050.jpg",
    },
    {
        descripcion: "Chilaquiles con mole", 
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/38304/640x640/49051.jpg.webp",
    },
];

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

router.get('/', (request, response, next) => {
    console.log('Ruta /preparar');
    response.send(`
        ${html_header}
        <header>
            <h1 class="title">Preparar chilaquiles</h1>
        </header>
        <main>
            <br><br>
            <form action="/preparar" method="POST">
                <div class="field">
                    <label class="label" for="nombre">Nombre</label>
                    <div class="control">
                        <input id="nombre" name="nombre" class="input" type="text" placeholder="Lalo" required>
                    </div>
                </div>

                <div class="field">
                    <label for="salsa" class="label">Salsa</label>
                    <div class="control">
                        <div class="select">
                            <select id="salsa" name="salsa">
                                <option value="verde">Verde</option>
                                <option value="roja">Roja</option>
                                <option value="chipotle">Chipotle</option>
                                <option value="mole">Mole</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="control">
                    <input type="submit" class="button is-link" value="Preparar">
                </div>
                
            </form>
        ${html_footer}
    `); 
});

router.post('/', (request, response, next) => {
    console.log(request.body);
    let tipo_chilaquiles = 0;

    if (request.body.salsa == "roja") {
        tipo_chilaquiles = 1;
    } else if (request.body.salsa == "chipotle") {
        tipo_chilaquiles = 2;
    } else if (request.body.salsa == "mole"){
        tipo_chilaquiles = 3;
    }

    response.send(`
        ${html_header}
        <img alt="${chilaquiles[tipo_chilaquiles].descripcion}" src="${chilaquiles[tipo_chilaquiles].imagen}">
        ${html_footer}
    `);
});

module.exports = router;