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
      fruta.save().then(function(res) {
        console.log('Fruta cadastrada com sucesso! => ', res);
      }, function(err) {
        if(err) throw new Error('Erro ao cadastrar uma fruta:\n', err);
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
      Model.update({_id: doc._id}, {$set: {nome: doc.nome, quantidade: doc.quantidade, preco: doc.preco}}).then(function(res) {
        console.log('Documento atualizado com sucesso => ', res);
      }, function(err) {
        if(err) throw new Error('Error ao fazer atualização do doc:\n', err);
      });
    }
  };
  //fim do objeto

  return Fruit;
}
