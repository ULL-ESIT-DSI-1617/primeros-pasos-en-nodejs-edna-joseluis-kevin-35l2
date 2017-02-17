var express = require('express')
var app = express()
var path = require('path')
var listen_port = 8080

app.use(express.static('./gh-pages'))

app.get('/', function (req, res) {
  res.send('index');
})

app.listen(listen_port)

console.log('Servidor Express escuchando en el puerto:', listen_port)
