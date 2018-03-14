const mongoose = require('mongoose');

const dbURI = 'mongodb://jonas:12345@ds111279.mlab.com:11279/kivikoski';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function (){
    console.log('Mongoose connected to $ {dbURI}');
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error:', err);

});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

require('./appSchemas');