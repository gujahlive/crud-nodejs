module.exports = function(app) {
  var fruta = app.models.fruit;

    var HomeController = {
      postAddFruit: function(req, res) {

        console.log(req.body);

        var doc = {
          nome: req.body.nome,
          quantidade: req.body.quantidade,
          preco: req.body.preco.replace(',', '.')
        };

        fruta.save(doc);
      },

    getAllFruits: function(req, res) {
      fruta.find({}, function(doc) {
        console.log(doc);
        res.json(doc);
      });
    },

    getOneFruit: function(req, res) {
      fruta.findOne({_id: req.params.id}, function(doc) {
        res.json(doc);
        console.log(doc);
      });
    },

    postUpdateFruit: function(req, res) {
      var doc = req.body;
      console.log(doc);
      fruta.update(doc);
    }
  };

    return HomeController;
}
