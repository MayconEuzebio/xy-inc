var mongoose = require('mongoose'),
    integerValidator = require('mongoose-integer');

module.exports = function() {

    var schema = mongoose.Schema({
        name: {
            type: String,
            required:true
        },
        x: {
            type: Number,
            integer: true,
            min: 0,
            required: true
        },
        y: {
            type: Number,
            integer: true,
            min: 0,
            required: true
        },
        created: {
            type: Date,
            default: Date.now
        }
    });

    schema.plugin(integerValidator);

    return mongoose.model('POI', schema);
};