// Importar
var express = require('express');

// instanciar
var app = express();
var path = require('path');
app.set('port', (process.env.PORT || 8080));


// Ruteo
app.use(express.static(path.join('/gh-pages')));

app.get('/', function (req, res) {
    res.sendFile('index');
});


// Escuchar
var server = app.listen(app.get('port'), function () {
    console.log('Servidor escuchando en el puerto %s', app.get('port'));
});
