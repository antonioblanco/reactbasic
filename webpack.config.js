var path = require('path');
var entryPath = path.join(_direname,'src');
var outPath = path.join(_direname,'dist');

module.exports =  {
    entry: [
        path.join(entryPath, 'app.js')
    ],
    output:{
        path: outPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: entryPath,
                loaders: ['babel']
            }
        ]
    }
}