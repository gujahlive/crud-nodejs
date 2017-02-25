module.exports = function(app) {
    var controller = app.controllers.home;

    app.post('/fruta/cadastro', controller.postAddFruit);
    app.get('/fruta/busca', controller.getAllFruits);
    app.get('/fruta/busca/:id', controller.getOneFruit);
    app.post('/fruta/edita', controller.postUpdateFruit);
    app.post('/fruta/removeLogico', controller.removeLogicalFruit);
};
