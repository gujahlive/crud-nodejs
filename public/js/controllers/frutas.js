var app = angular.module('main');

app.controller('listController', function($scope, $resource, $location) {
	$scope.title = 'Lista de frutas';
  var FrutaResource = $resource('/fruta/busca');

  FrutaResource.query(function(res) {
    $scope.fruits = res;
  });

  $scope.getAllFruits = function() {
    var FrutaResource = $resource('/fruta/busca');
    FrutaResource.query(function(res) {
      $scope.fruits = res;
    });
  };

  $scope.remove = function(id) {
    var FrutaResource = $resource('/fruta/removeLogico'),
      frutaResource = new FrutaResource();

    frutaResource.fruta = id;
    console.debug(frutaResource.fruta);
    frutaResource.$save();
    $scope.$emit('reload');
  };

  $scope.$on('reload', $scope.getAllFruits);

});

app.controller('saveFruit', function($scope, $resource) {
    $scope.title = 'Cadastro de frutas';
    var FrutaResource = $resource('/fruta/cadastro'),
      frutaCadastro = new FrutaResource();

    $scope.save = function() {
      $scope.triedSubmit = true;
      $scope.isSave = false;
      $scope.isError = false;

  		if($scope.fruta.nome && $scope.fruta.quantidade && $scope.fruta.preco){
  	    frutaCadastro.fruta = $scope.fruta;
        frutaCadastro.$save();
  	    $scope.isSave = true;
        $scope.message = 'Fruta cadastrada com sucesso!';
  		}else{
  			$scope.isError = true;
        $scope.message = 'Erro ao cadastrar fruta :('
  		}
    };
});

app.controller('editFruit', function($scope, $routeParams, $resource) {
  $scope.title = 'Atualizar frutas';
  var FrutaResource = $resource('/fruta/busca/:id');
  FrutaResource.get({id: $routeParams.id}, function(res) {
    res.preco = res.preco.toString().replace('.', ',');
    $scope.fruta = res;
  });

  FrutaResource = $resource('/fruta/edita');
  frutaResource = new FrutaResource();
  $scope.save = function() {
    $scope.triedSubmit = true;
    if($scope.fruta.nome && $scope.fruta.quantidade && $scope.fruta.preco){
      $scope.fruta.preco = $scope.fruta.preco.replace(',', '.');
      frutaResource.fruta = $scope.fruta;
      frutaResource.$save();

      $scope.isSave = true;
      $scope.message = 'Fruta atualizada com sucesso.'
    }else{
      $scope.isError = true;
      $scope.message = 'Erro ao fazer atualização da fruta.'
    }
  };
});

app.controller('removeFruit', function($scope, $routeParams, $resource, $location) {

});
