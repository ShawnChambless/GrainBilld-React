var express    = require('express'),
    app        = express(),
    port       = 8080,
    bodyParser = require('body-parser'),
    recipeCtrl = require('./api/controllers/recipeCtrl'),
    mongoose   = require('mongoose'),
    mongoose   = require('mongoose');

app
    .use(bodyParser.json())
    .use(express.static(__dirname + '/public/public'))

    .get('/recipes', recipeCtrl.getCommunityRecipes)
    .get('/totalRecipes', recipeCtrl.getRecipeTotals);

mongoose
    .set('debug', true)
    .connect('mongodb://localhost:27017/grainbilld', function() {
        console.log('Mongo is listening');
    });

app.listen(port, function() {
    console.log('Listening on', port);
});
