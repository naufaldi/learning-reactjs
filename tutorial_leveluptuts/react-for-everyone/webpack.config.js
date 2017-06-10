module.exports = {
    entry : './src/App.js',
    output:  {
        path : __dirname,
        filename :  'app.js'  //depend on class in index
    },
    module: {
        loaders: [{
            test : /\.jsx?$/,
            exclude : /node_modules/,
            loader:  'babel',
            query:  {
                presets : ['es2015','react']
            }
        }]
    }
};