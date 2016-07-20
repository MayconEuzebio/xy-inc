var express = require('express');
var load = require("express-load");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var sass = require('node-sass'); // We're adding the node-sass module
var path = require('path');
var helmet = require('helmet');

module.exports = function() {
    var app = express();

    // configuração de ambiente
    app.set('port', 8000);

    // middleware
    app.use(cookieParser());
    app.use(session(
        { secret: 'gCjt0W9DkrEADQug',
            resave: true,
            saveUninitialized: true
        }
    ));
    app.use(passport.initialize());
    app.use(passport.session());
    //app.use(helmet());
    // configurações de segurança helmet
    app.use(helmet.hidePoweredBy({ setTo: 'PHP 5.5.14' }));
    app.use(helmet.xframe());
    app.use(helmet.xssFilter());
    app.use(helmet.nosniff());

    app.use(express.static('./public'));
    app.set("view engine", "ejs");
    app.set("views", "./app/views");
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(require("method-override")());
    load("models", {cwd: "app"})
        .then("controllers")
        .then("routes")
        .into(app);

    var Head = app.models.head;

    app.get("*", function(req, res){
        var user = Head.loged(req);
        res.status(404).render('404', {
            siteName: Head.siteName,
            title: "404 - Página não encontrada | Localizador de Lojas",
            userName: user.name,
            user: user
        });
    });

    return app;
};
