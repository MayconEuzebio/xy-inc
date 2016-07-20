var mongoose = require('mongoose');

module.exports = function() {

    var schema = mongoose.Schema({
        siteName: {
            value: "Node",
            type: String,
            required: true

        },
        tagGoogleAnalytics: {
            value: "",
            type: String,
            required: true

        }
    });

    var model = mongoose.model('Head', schema);

    // metodo para carregar o usuário na sessão tendo como parametro necessário a req http
    model.loged = function(req) {
        var login = '';
        if (req.user) {
            login = req.user;
            // limpa a senha do usuário por segurança
            login.password = null;
        }
        return login;
    };

        return model;
};