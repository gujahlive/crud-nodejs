var app = angular.module('main');

app.controller('listController', function($scope, $http, $resource) {
	$scope.title = 'Lista de frutas';

  var fruta = $resource('/fruta/busca');

  fruta.query(function(res) {
    $scope.fruits = res;
  });

});

app.controller('editController', function($scope, $location, $routeParams, $resource) {
	$scope.title = 'Editar frutas';
  $scope.nome = $routeParams.nome;
  $scope.qnt =  parseInt($routeParams.quantidade);
  $scope.preco = $routeParams.preco.replace('.', ',');

  var Fruta = $resource('/fruta/edita');

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

app.controller('newController', function($scope, $resource, $location) {
	$scope.title = 'Cadastro de frutas';
  var fruta = $resource('/fruta/cadastro');

  $scope.save = function() {
    $scope.isSave = false;
    $scope.isError = false;

		if($scope.nome && $scope.qnt && $scope.preco){
			var fruta = new fruta();
	    fruta.nome = $scope.nome.toLowerCase();
	    fruta.quantidade = $scope.qnt;
			fruta.preco = $scope.preco;
	    fruta.$save();
      console.log(fruta.nome, fruta.quantidade, fruta.preco);
	    $scope.isSave = true;
		}else{
			$scope.isError = true;
		}


  }
});

app.controller('removeController', function($scope, $location, $routeParams) {

});
