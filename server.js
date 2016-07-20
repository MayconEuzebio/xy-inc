#!/usr/bin/env nodejs
// Em ambiente de desenvolvimento caso o cliente não esteja instalado use o comando sudo npm install -g nodemon

var http = require('http');
var app = require('./config/express')();
//require('./config/passport')();   movi a configuração do passport para o controller user
require('./config/database.js')('mongodb://localhost/devteste2');

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server escutando na porta ' +
        app.get('port'));
});
