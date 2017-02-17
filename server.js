// importar
var express = require('express');

// instanciar
var app = express()
var path = require('path')
app.set('port', (process.env.PORT || 8080));



// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/gh-pages/index.html');
});


/* 
app.get('/about', function(req, res){
  res.sendfile(__dirname + '/public/about.html');
});
*/


app.use(express.static(path.join(__dirname,'gh-pages')));

// app.use(express.static('./gh-pages'))

app.get('/', function (req, res) {
  res.send('index');
})


// escuchar
app.listen(app.get('port'), function() {
  console.log('Servidor corriendo... Acceda a 10.6.129.247:', app.get('port'));
});
