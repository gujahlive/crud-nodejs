angular.module('main').factory('frutaService', function($resource) {

  function _save() {
    var FrutaResource = $resource('/fruta/cadastro');

    return new FrutaResource();
  };

  function _set() {
    var FrutaResource = $resource('/fruta/edita');
    return new FrutaResource();
  };

  function _get(query, callback) {
    var FrutaResource = $resource('/fruta/busca');
    var res = FrutaResource.query();
    return callback(res);
  };

  function _remove(_id) {
    var FrutaResource = $resource('/fruta/removeLogico'),
      frutaResource = new FrutaResource();
    frutaResource.fruta = _id;
    frutaResource.$remove();
  };

  return {
    save: _save,
    set: _set,
    get: _get,
    remove: _remove
  };
});
