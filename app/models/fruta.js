var mongoose = require('mongoose');
module.exports = function() {
  var fruitsSchema,
    collectionName = 'fruta';

  fruitsSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true,
      index:{
        unique: true
      }
    },
    quantidade: {
      type: Number,
      required: true
    },
    preco: {
      type: Number,
      required: true
    },
    ativo: {
      type: Boolean,
      default: true
    }
  });

  return mongoose.model(collectionName, fruitsSchema);
};
