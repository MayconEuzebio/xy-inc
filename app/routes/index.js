module.exports = function(app) {
    var controller = app.controllers.index;
    app.get('/', controller.index);
    app.get('/home', controller.index);
    app.get('/index', controller.index);
    app.get('/inicio', controller.index);
};