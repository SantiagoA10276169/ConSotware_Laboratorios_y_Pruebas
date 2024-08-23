const express = require('express');
const path = require('path');
const { pathToFileURL } = require('url');

const app = express();

const PORT = 3000;

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

    console.log("Welcome Summoner!");

}, 12000);


const http = require('http');

const server = http.createServer( (request, response) => {    

    console.log(request.url);

    response.setHeader('Content-Type', 'text/html');

    response.write("Im FEH WELCOME!");
    

    response.end();

});

//server.listen(3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Assuming you have an index.html file
});

app.get('/summon', (req, res) => {
  res.sendFile(path.join(__dirname, 'brave.html')); // Assuming you have an index.html file
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log( `Servidor corriendo en http://localhost:${PORT}`);
});