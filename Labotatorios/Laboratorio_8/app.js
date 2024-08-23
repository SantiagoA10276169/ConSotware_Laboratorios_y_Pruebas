const filesystem = require('fs'); //fs es el módulo de filesystem

//Escribe el segundo parámetro en el archivo del primer parámetro

filesystem.writeFileSync('hola.txt', 'Did you miss me? Admit it, you missed me');

//Código asíncrono

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {

    setTimeout(() => {

        console.log(item);

    }, item);

} 

//setTimeout recibe como parámetro, una función, y la cantidad de segundos

//que van a pasar antes de que se ejecute la función.

setTimeout(() => {

    console.log("We'll meet again, don't know where, don't know when, oh, I know we'll meet again some sunny day!");

}, 12000);


const http = require('http');

const server = http.createServer( (request, response) => {    

    console.log(request.url);

    response.setHeader('Content-Type', 'text/html');

    response.write("Did you miss me? Admit it, you missed me");

    response.write(`

    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POV:Dipper. Sock Opera</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
    <link rel="stylesheet" type="text/css" href="css/McGucket.css">
</head>
<body>
    <div class="container">
        <div class="box" style="width: 300px;">
            <form id="miFormulario">
                <div class="field">
                    <label for="password" class="label">Contraseña:</label>
                    <div class="control">
                        <input type="password" id="password" name="password" class="input">
                    </div>
                </div>
                <div class="field">
                    <label for="confirm_password" class="label">Confirmar Contraseña:</label>
                    <div class="control">
                        <input type="password" id="confirm_password" name="confirm_password" class="input">
                    </div>
                </div>
                <div id="feedback"></div>
            </form>
            <p id="mensajeErrores"></p>
            <div class="field is-grouped is-grouped-centered">
                <button class="button is-info" id="bottom_Error">Enter</button>
            </div>
        </div>
    </div>
</body>
<script src="js/cosn.js"></script>
</html>


    `);

    

    response.end();

});

server.listen(3000);