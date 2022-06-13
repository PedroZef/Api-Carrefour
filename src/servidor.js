const express = require("express");
const app = express()

const api = require('./api');

app.use(express.static(__dirname + '/'));

app.use(api)

app.get('/', function( req, res){
    res.render('./index.html')

});

app.listen(2222, function() {

    console.log('Servidor iniciado... tudo certo')
})