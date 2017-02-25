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
    },
    ativo: {
      type: Boolean,
      default: true
    }
  });

  Model =  mongoose.model(collectionName, fruitsSchema);

  var Fruit = {

    save: function(doc) {
      fruta = new Model(doc);
      fruta.save()
        .then(function(res) {
          console.log('Documento cadastrada com sucesso! => ', res);
        }, function(err) {
          if(err) throw new Error('Erro ao cadastrar o documento:\n', err);
        });
    },

    find: function(query, callback) {
      Model.find(query).exec()
        .then(function(doc) {
          callback(doc);
        }, function(err) {
          if(err) throw new Error('Erro ao buscar o documento:\n' + err);
        });
    },

    findOne: function(query, callback) {
      Model.findOne(query).exec()
        .then(function(doc) {
          callback(doc);
        }, function(err) {
          if(err) throw new Error('Erro ao buscar o documento:\n' + err);
        });
    },

    update: function(doc) {
      Model.update({_id: doc._id}, {$set: {nome: doc.nome, quantidade: doc.quantidade, preco: doc.preco}})
        .then(function(res) {
          console.log('Documento atualizado com sucesso => ', res);
        }, function(err) {
          if(err) throw new Error('Error ao fazer atualização do doc:\n', err);
        });
    },

    removeLogical: function(_id) {
      Model.update({_id: _id}, {$set: {ativo: false}})
        .then(function(res) {
          console.log('Documento removido logicamente com sucesso =>', res);
        }, function(err) {
          if(err) throw new Error('Erro ao remover logicamente o documento:\n', err);
        });
    }
  };
  //fim do objeto

  return Fruit;
}
