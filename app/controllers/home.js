module.exports = function(app) {
  var fruta = app.models.fruit;

    var HomeController = {
      postAddFruit: function(req, res) {
        var doc = {
          nome: req.body.fruta.nome,
          quantidade: req.body.fruta.quantidade,
          preco: req.body.fruta.preco.replace(',', '.')
        };

        fruta.save(doc);
      },

    getAllFruits: function(req, res) {
      fruta.find({ativo: true}, function(doc) {
        res.json(doc);
      });
    },

    getOneFruit: function(req, res) {
      fruta.findOne({_id: req.params.id}, function(doc) {
        res.json(doc);
      });
    },

    postUpdateFruit: function(req, res) {
      var doc = req.body.fruta;
      console.log('DOC TO UPDATE => ', doc);
      fruta.update(doc);
    },

    removeLogicalFruit: function(req, res) {
      var _id = req.body.fruta;
      console.log('ID REMOVE => ', _id);
      fruta.removeLogical(_id);
    }
  };

    return HomeController;
}
