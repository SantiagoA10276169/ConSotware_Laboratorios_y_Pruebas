const express = require('express');
const app = express();


//public

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//rutas/use

const misRuta = require('./routes/ruta_js');
app.use('/', misRuta);

const misRutas = require('./routes/rutas');
app.use('/', misRutas);



//gets

app.get('/', (request, response, next) => {
    console.log('Otro middleware!');
    response.render('home');
});

app.get('/about', (request, response, next) => {
    console.log('Otro middleware!');
    response.render('about');
});

app.get('/spark', (request, response, next) => {
    console.log('Otro middleware!');
    response.render('spark');
});


//404


app.use((request, response, next) => {
    response.statusCode = 404;
    response.render('404');
})

app.listen(3000);