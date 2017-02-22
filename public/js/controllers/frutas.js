var app = angular.module('main');

app.controller('listController', function($scope, $http, $resource) {
	$scope.title = 'Lista de frutas';
  var FrutaResource = $resource('/fruta/busca');

  FrutaResource.query(function(res) {
    $scope.fruits = res;
  });

});

app.controller('saveFruit', function($scope, $routeParams, $resource, $location) {
  $scope.id = $routeParams.id;
  console.debug($scope.fruta);
  console.debug($scope.id);

  if($scope.id == undefined) {
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
  		}else{
  			$scope.isError = true;
  		}
    };

  }else{
    $scope.title = 'Editar frutas';

    FrutaResource = $resource('/fruta/busca/:id');
    FrutaResource.get({id: $scope.id}, function(res) {
      console.debug(res);
      $scope.fruta = res;
    });

    $scope.save = function() {
      $scope.triedSubmit = true;
      $scope.isSave = false;
      $scope.isError = false;

      FrutaResource = $resource('/fruta/edita'),
        frutaCadastro = new FrutaResource();


  		if($scope.fruta.nome && $scope.fruta.quantidade && $scope.fruta.preco){
        //atribui scopo do formulario ao objeto fruta do resource de cadastro
        frutaCadastro.fruta = $scope.fruta;
  	    frutaCadastro.$save();

  	    $scope.isSave = true;
        $scope.message = ' registro atualizado';
  		}else{
  			$scope.isError = true;
        $scope.message = ' ao atualizar registro';
  		}
    }
  }

});

app.controller('removeController', function($scope, $location, $routeParams) {

});
