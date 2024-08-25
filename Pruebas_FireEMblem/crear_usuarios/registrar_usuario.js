const http = require('http');
const url = require('url');
const querystring = require('querystring');

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
                        <a class="button is-primary" href="/sign_in><strong>Sign up</strong></a>
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
            </p>
        </div>
    </footer>
</body>
</html>
`;
res.end();
    

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');

    if (pathname === '/' && method === 'GET') {
        res.write(`
            ${html_header}
            <input id="User" name="User" class="input" type="text" placeholder="User Name" required>
            ${html_footer}
        `)
    }
});