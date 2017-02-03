module.exports = function(app) {
    var controller = app.controllers.home;

    app.post('/fruta/cadastro', controller.postAddFruit);
    app.get('/fruta/busca', controller.getAllFruits);
    app.post('/fruta/edita', controller.postUpdateFruit);
};
