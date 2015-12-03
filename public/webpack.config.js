module.exports = {

    entry: [ './app/nav/navbar.js', './app/app.js'],
    output: {
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader'}
        ]
    }

};
