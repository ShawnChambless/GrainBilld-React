module.exports = {

    entry: [ './app/nav/navbar.js', './app/app.js'],
    ignore: ['/node_modules'],
    output: {
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, loaders: ['jsx-loader', 'babel-loader'],
                exclude: /node_modules/
            }
        ]
    }

};
