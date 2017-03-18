var app = angular.module('main');

app.controller('listController', function($scope, $location, frutaService) {
	$scope.title = 'Lista de frutas';
	frutaService.get({}, function(frutas) {
    $scope.fruits = frutas;
  });

  $scope.remove = function(id, index) {
    frutaService.remove(id);
    $scope.fruits.splice(index, 1);
  };

});

app.controller('saveFruit', function($scope, frutaService) {
    $scope.title = 'Cadastro de frutas';
		var frutaCadastro = frutaService.save();

    $scope.save = function() {
      $scope.triedSubmit = true;
      $scope.isSave = false;
      $scope.isError = false;

  		if($scope.fruta.nome && $scope.fruta.quantidade && $scope.fruta.preco){
  	    frutaCadastro.fruta = $scope.fruta;
        frutaCadastro.$save();
  	    $scope.isSave = true;
        $scope.message = $scope.fruta.nome + ' cadastrada com sucesso!';
  		}else{
  			$scope.isError = true;
        $scope.message = 'Erro ao cadastrar ' + $scope.fruta.nome;
  		}
    };
});

app.controller('editFruit', function($scope, $routeParams, frutaService) {
  $scope.title = 'Atualizar frutas';
  var FrutaResource = $resource('/fruta/busca/:id');
  FrutaResource.get({id: $routeParams.id}, function(res) {
    res.preco = res.preco.toString().replace('.', ',');
    $scope.fruta = res;
  });


  frutaResource = frutaService.set();
  $scope.save = function() {
    $scope.triedSubmit = true;
    if($scope.fruta.nome && $scope.fruta.quantidade && $scope.fruta.preco){
      $scope.fruta.preco = $scope.fruta.preco.replace(',', '.');
      frutaResource.fruta = $scope.fruta;
      frutaResource.$save();

      $scope.isSave = true;
      $scope.message = $scope.fruta.nome + ' atualizada com sucesso.';
    }else{
      $scope.isError = true;
      $scope.message = 'Erro ao fazer atualização da ' + $scope.fruta.nome;
    }
  };
});

app.controller('removeFruit', function($scope, $routeParams, $resource, $location) {

});
