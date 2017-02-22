module.exports = function(app) {
  var fruta = app.models.fruit;

    var HomeController = {
      postAddFruit: function(req, res) {

        console.log(req.body.fruta);

        var doc = {
          nome: req.body.fruta.nome,
          quantidade: req.body.fruta.quantidade,
          preco: req.body.fruta.preco.replace(',', '.')
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
        res.json({
          nome: doc.nome,
          quantidade: parseInt(doc.quantidade),
          preco: doc.preco.replace('.', ',')
        });
        console.log(doc);
      });
    },

    postUpdateFruit: function(req, res) {
      var doc = {
        nome: req.body.fruta.nome,
        quantidade: parseInt(req.body.fruta.quantidade),
        preco: req.body.fruta.preco.replace(',', '.')
      };
      console.log(doc);

      fruta.update(doc);
    }
  };

    return HomeController;
}
