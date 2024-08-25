const express = require('express');
const router = express.Router();


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

router.get('/sign', (request, response, next) => {
    response.send(`
        ${html_header}
            <div class="field">
                <label class="label">User Name</label>
                <div class="control">
                    <input id="User" name="User" class="input" type="text" placeholder="User Name" required>
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input id="pass" name="pass" class="input" type="password" placeholder="Password" required>
                </div>
            </div>
            <form action="/errorenregistro" method="post">
                <div class="field">
                    <div class="control">
                    <button type="submit" class="button is-link">Registrar</button>
                    </div>
                </div>
            </form>

        </form>
        ${html_footer}
    `);
});


module.exports = router;
