module.exports = function(app) {
    var controller = app.controllers.poi;

    app.route("/poi")
        .get(controller.listObjects)
        .post(controller.saveObject);

    app.route("/poi/:id")
        .get(controller.getObject)
        .delete(controller.removeObject);

    app.route("/search-poi")
        .post(controller.getObjectsSearch);
};
