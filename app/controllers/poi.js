var sanitize = require('mongo-sanitize');

module.exports = function(app) {
    var controller = {};
    var Object = app.models.poi;

    // controle do objeto
    controller.listObjects = function(req, res){
        Object.find()
            .exec()
            .then(
            function(objects) {
                res.json(objects);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.getObject = function(req, res){
        var _id = sanitize(req.params.id);
        Object.findById(_id).exec()
            .then(
            function(object) {
                if (!object) throw new Error("POI não encontrado");
                res.json(object)
            },
            function(erro) {
                console.log(erro);
                res.status(404).json(erro)
            }
        );
    };

    controller.removeObject = function(req, res) {
        var _id = sanitize(req.params.id);
        Object.remove({"_id" : _id}).exec()
            .then(
            function() {
                res.end();
            },
            function(erro) {
                return console.error(erro);
            }
        );
    };

    controller.saveObject = function(req, res) {
        var _id = sanitize(req.body._id);
        var data = req.body;

        if(_id) {
            Object.findByIdAndUpdate(_id, data).exec()
                .then(
                function(object) {
                    res.json(data);
                },
                function(erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        } else {
            Object.create(data)
                .then(
                function(object) {
                    res.status(201).json(object);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                }
            );
        }
    };

    controller.getObjectByField = function(req, res){
        var field = sanitize(req.params.field);
        var value = sanitize(req.params.param);

        var params = {};
        params[field] = value;
        Object.find(params)
            .exec()
            .then(
            function(object) {
                //if (object.length <= 0) throw new Error("objeto não encontrado");
                if(object.length > 0){
                    res.json(object)
                }
                else{
                    console.log(object); // no lugar do objeto foi retornado um erro
                    res.status(204).json(object)
                }
            },
            function(object) {
                console.log(object); // no lugar do objeto foi retornado um erro
                res.status(404).json(object)
            }
        );
    };

    controller.getObjectsSearch = function(req, res){
        var s = sanitize(req.body),
            maxX = s.x + s.max,
            maxY = s.y + s.max,
            minX = s.x - s.max,
            minY = s.y - s.max;

        Object.find()
            .exec()
            .then(
            function(objects) {
                s = objects.filter(function (obj) {
                    if(
                        (obj.x < maxX && obj.x > minX)
                        &&
                        (obj.y < maxY && obj.y > minY)
                    ){
                        return obj;
                    }
                });
                res.status(200).json(s);
            },
            function(object) {
                console.log(object); // no lugar do objeto foi retornado um erro
                res.status(404).json(object)
            }
        );
    };

    return controller;

};