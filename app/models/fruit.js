var mongoose = require('mongoose');

module.exports = function() {
  var fruitsSchema,
    Model,
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
    }
  });

  Model =  mongoose.model(collectionName, fruitsSchema);

  var Fruit = {

    save: function(doc) {
      fruta = new Model(doc);
      fruta.save().then(function(doc) {

      });
    },

    find: function(query, callback) {
      Model.find(query).exec().then(function(doc) {
        callback(doc);
      }, function(err) {
        if(err) throw new Error('Erro a buscar fruta:\n' + err);
      });
    },

    findOne: function(query, callback) {
      Model.findOne(query).exec().then(function(doc) {
        callback(doc);
      }, function(err) {
        if(err) throw new Error('Erro ao buscar uma fruta:\n' + err);
      });
    },

    update: function(doc) {
      Model.update({_id: doc.id}, {$set: {nome: doc.nome, quantidade: doc.quantidade, preco: doc.preco}}, function() {
        console.log('Fruta atualizada com sucesso');
      });
    }
  };
  //fim do objeto

  return Fruit;
}
