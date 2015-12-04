var mongoose = require('mongoose'),
    Grain    = mongoose.model('Grain', require('../models/grainModel.js')),
    Hops     = mongoose.model('Hops', require('../models/hopsModel.js')),
    Yeast    = mongoose.model('Yeast', require('../models/yeastModel.js'));

module.exports = {
    getAll:  function(req, res) {
        var ingredients = {};
        Grain.find({}, function(err, grain) {
            if(err) return res.status(500).json(err);
            ingredients.grain = grain;
        });
        Hops.find({}, function(err, hops) {
            if(err) return res.status(500).json(err);
            ingredients.hops = hops;
        });
        Yeast.find({}, function(err, yeast) {
            if(err) return res.status(500).json(err);
            ingredients.yeast = yeast;
            return res.status(200).json(ingredients);
        });
    }
};
