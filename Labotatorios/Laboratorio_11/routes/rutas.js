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



router.get('/braves', (request, response, next) => {
    response.send(`
            ${html_header}

            <!DOCTYPE html>
<main>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
  <title>Choose Your Legends</title>
</head>
<body>
  <section class="section">
    <div class="container">
      <div class="box">
        <h1 class="title">Choose Your Legends</h1>
        <p>These incredible heroes have been selected by summoners from around the world and receive unique clothing and skills! FEH, I wonder what heroes are next!</p>
        <div class="has-text-centered">
          <figure class="image is-128x128">
            <img src="https://static.wikia.nocookie.net/feheroes_gamepedia_en/images/0/0b/Feh_BtlFace_D.png/revision/latest?cb=20170816174146" alt="FEH Hero">
          </figure>
        </div>
        <div class="has-text-centered">
          <!-- Se ha añadido la clase "mb-0" para eliminar el margen inferior del video -->
          <figure class="image is-16by9 mb-0">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xLLI3G2iANk?si=P1SfJNcMOiegjl-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="box has-text-centered">
        <h2 class="title is-2">CyL 1 Brave Heroes</h2>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Plase</th>
              <th>Female Winers</th>
              <th>Image</th>
              <th>Male Winers</th>
              <th>Image</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>1 Place</td>
              <td>Lyn ~ Brave Lady</td>
              <td><figure class="image is-64x64">
                <img src="https://cdn.fireemblemwiki.org/thumb/1/12/FEH_Lyn_Brave_Lady_01.png/295px-FEH_Lyn_Brave_Lady_01.png?20170829042920" />
              </figure>
              </td>
              <td>Ike ~ Brave Mercenary</td>
              <td><figure class="image is-64x64">
                <img src="https://cdn.fireemblemwiki.org/thumb/1/18/FEH_Ike_Brave_Mercenary_01.png/487px-FEH_Ike_Brave_Mercenary_01.png?20170829042904" />
              </figure>
              </td>
            </tr>
            <tr>
              <td>2 Place</td>
              <td>Lucina ~ Brave Princess</td>
              <td><figure class="image is-64x64">
                <img src="https://cdn.fireemblemwiki.org/thumb/6/60/FEH_Lucina_Brave_Princess_01.png/393px-FEH_Lucina_Brave_Princess_01.png?20170829042858" />
              </figure></td>
              <td>Roy ~ Brave Lion</td>
              <td><figure class="image is-64x64">
                <img src="https://cdn.fireemblemwiki.org/thumb/8/86/FEH_Roy_Brave_Lion_01.png/478px-FEH_Roy_Brave_Lion_01.png?20170829042913" />
              </figure>
            </tr>
          </tfoot>
        </table>

        <div class="has-text-centered">
          <!-- Se ha añadido la clase "mb-0" para eliminar el margen inferior del video -->
          <figure class="image is-16by9 mb-0">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gThvml8zdyg?si=Vnv2ENMjOGSYcV9P" allowfullscreen></iframe>
          </figure>

        <h2 class="title is-2">CyL 2 Arrival of the Brave</h2>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Plase</th>
              <th>Female Winers</th>
              <th>Image</th>
              <th>Male Winers</th>
              <th>Image</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>1 Place</td>
              <td>Celica ~ Warrior Priestess</td>
              <td><figure class="image is-64x64">
                <img src="https://cdn.fireemblemwiki.org/thumb/4/49/FEH_Celica_Warrior_Priestess_01.png/267px-FEH_Celica_Warrior_Priestess_01.png?20180824001000" />
              </figure>
              </td>
              <td>Hector ~ Brave Warrior</td>
              <td><figure class="image is-64x64">
                <img src="https://cdn.fireemblemwiki.org/thumb/c/c6/FEH_Hector_Brave_Warrior_01.png/502px-FEH_Hector_Brave_Warrior_01.png?20180824001004" />
              </figure>
              </td>
            </tr>
            <tr>
              <td>2 Place</td>
              <td>Veronica ~ Brave Princess</td>
              <td><figure class="image is-64x64">
                <img src="https://cdn.fireemblemwiki.org/thumb/8/8a/FEH_Veronica_Brave_Princess_01.png/403px-FEH_Veronica_Brave_Princess_01.png?20180824000951" />
              </figure></td>
              <td>Ephraim ~ Sacred Twin Lord</td>
              <td><figure class="image is-64x64">
                <img src="https://cdn.fireemblemwiki.org/thumb/6/64/FEH_Ephraim_Sacred_Twin_Lord_01.png/459px-FEH_Ephraim_Sacred_Twin_Lord_01.png?20180824000955" />
              </figure>
            </tr>
          </tfoot>
        </table>

        <div class="has-text-centered">
          <!-- Se ha añadido la clase "mb-0" para eliminar el margen inferior del video -->
          <figure class="image is-16by9 mb-0">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YgqfMDov1EE?si=T5bZGuI6E5G_MAjl" allowfullscreen></iframe>
          </figure>
      </div>
    </div>
  </section>
</main>        
        
            ${html_footer}
            `); 
});




module.exports = router;