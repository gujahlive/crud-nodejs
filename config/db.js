var mongoose = require('mongoose');

module.exports = function(url) {
  mongoose.connect(url, {server: {poolSize: 15}});

  mongoose.connection.on('connected', function() {
    console.log('Banco conectado em ' + url);
  });

  mongoose.connection.on('error', function(err) {
    console.log('Error ao conectar com o mongo:\n ', err);
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose encerrado pelo termino da aplicação.');
        process.exit(0);
    });
  });
};
