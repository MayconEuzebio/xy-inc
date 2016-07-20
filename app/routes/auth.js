var passport = require('passport');

module.exports = function(app) {

    // não utilizado
    app.get('/auth/local', passport.authenticate('login'));
    app.get('/auth/local/callback',
        passport.authenticate('login', {
            successRedirect: '/'
        }));

    /* Requisição POST para LOGIN */
    app.post('/login', passport.authenticate('login', {
        successRedirect: '/entrar',
        failureRedirect: '/',
        failureFlash : true
    }));

    /* Requisição POST para Registros - não utilizado*/
    app.post('/signup', passport.authenticate('signup', {
        successRedirect: '/home',
        failureRedirect: '/signup',
        failureFlash : true
    }));

    /*requisição para sair da parte interna do sistema*/
    app.get('/logout', function(req, res) {
        req.logOut(); // exposto pelo passport
        res.redirect('/');
    });

    return app;
};