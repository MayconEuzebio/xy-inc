module.exports = function(app) {
    var controller = {};
    var Head = app.models.head;

    controller.index = function (req, res) {
        var user = Head.loged(req);
        console.log(user);
        res.render('index', {
            siteName: Head.siteName,
            title: "Bem vindo",
            userName: user.name,
            user: user
        });
    };

    return controller;
};