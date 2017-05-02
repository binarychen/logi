/**
 * New node file
 */

var models = require('./db');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

for(var m in models){ 
    mongoose.model(m,new Schema(models[m]));
}

var _getModel = function(type){ 
    return mongoose.model(type);
};

module.exports = { 
    getModel: function(type){ 
        return _getModel(type);
    }
};