var app = angular.module('main');

app.controller('listController', function($scope, $http, $resource) {
	$scope.title = 'Lista de frutas';
  var Fruta = $resource('/fruta/busca');

  Fruta.query(function(res) {
    $scope.fruits = res;
  });

});

app.controller('editController', function($scope, $location, $routeParams, $resource) {

  $scope.qnt =  parseInt($routeParams.quantidade);
  $scope.preco = $routeParams.preco.replace('.', ',');



  $scope.save = function() {
    $scope.isSave = false;
    $scope.isError = false;

    if($scope.nome && $scope.qnt && $scope.preco){
      var fruta = new Fruta();
      fruta.id = $routeParams.id;
      fruta.nome = $scope.nome.toLowerCase();
      fruta.quantidade = $scope.qnt;
      fruta.preco = $scope.preco.replace(',', '.');
      fruta.$save();
      console.log(fruta.id, fruta.nome, fruta.quantidade, fruta.preco);
      $scope.isSave = true;
      $scope.message = ' Registro atualizado. Redirecionando...';
    }else{
      $scope.isError = true;
      $scope.message = 'Na atualização do registro. Redirecionando...';
    }


  }

});

app.controller('saveFruit', function($scope, $routeParams, $resource, $location) {
  var Fruta = $resource('/fruta/cadastro');
  $scope.fruta = new Fruta();
  $scope.id = $routeParams.id;
  console.log($scope.fruta);
  console.log($scope.id);

  if($scope.id === undefined) {
    $scope.title = 'Cadastro de frutas';
    $scope.save = function() {
      $scope.isSave = false;
      $scope.isError = false;

  		if($scope.fruta.nome && $scope.fruta.quantidade && $scope.fruta.preco){
  	    $scope.fruta.$save();
  	    $scope.isSave = true;
  		}else{
  			$scope.isError = true;
  		}
    }
  }else{
    Fruta = $resource('/fruta/busca/:id');
    Fruta.get({id: $scope.id}, function(res) {
      console.log(res);
      $scope.fruta = res;
      $scope.fruta.preco = $scope.fruta.preco.toString().replace('.', ',');
    });
    $scope.title = 'Editar frutas';

    $scope.save = function() {
      Fruta = $resource('/fruta/edita');
      $scope.fruta = new Fruta();
      $scope.isSave = false;
      $scope.isError = false;

  		if($scope.fruta.nome && $scope.fruta.quantidade && $scope.fruta.preco){
        $scope.fruta.preco = $scope.fruta.preco.toString().replace(',', '.');
        $scope.fruta.quantidade = parseInt($scope.fruta.quantidade);
  	    $scope.fruta.$save();
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
