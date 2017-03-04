module.exports = function(app) {
  var Model = app.models.fruit,
      fruta = require('../models/mongoose.js')(Model);

  var HomeController = {
    postAddFruit: function(req, res) {
      var doc = {
        nome: req.body.fruta.nome,
        quantidade: req.body.fruta.quantidade,
        preco: req.body.fruta.preco.replace(',', '.')
      };

      fruta.save(doc, function(err, res) {
        if(err) throw err;

        console.log('DOCUMENTO INSERIDO COM SUCESSO!\n', res);
      });
    },

    getAllFruits: function(req, res) {
      fruta.find({ativo: true}, function(err, doc) {
        if(err) throw err;

        res.json(doc);
      });
    },

    getOneFruit: function(req, res) {
      fruta.findOne({_id: req.params.id}, function(err, doc) {
        if(err) throw err;
        res.json(doc);
      });
    },

    postUpdateFruit: function(req, res) {
      var idDoc = req.body.fruta._id,
          doc = {
            nome: req.body.fruta.nome,
            quantidade: req.body.fruta.quantidade,
            preco: req.body.fruta.preco
          };

      fruta.update({_id: idDoc}, doc, function(err, res) {
        if(err) throw err;
        console.log('FRUTA ATUALIZADA COM SUCESSO!\n', res)
      });
    },

    removeLogicalFruit: function(req, res) {
      var _id = req.body.fruta;
      fruta.removeLogical(_id, function(err, res) {
        if(err) throw err;
        console.log('FRUTA REMOVIDA COM SUCESSO!\n', res);
      });
    }
  };

    return HomeController;
}
