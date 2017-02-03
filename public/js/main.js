var app = angular.module('main', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../partials/list.html',
        controller: 'listController'
    })
    .when('/fruta/edit/:id/:nome/:quantidade/:preco', {
        templateUrl: '../partials/form.html',
        controller: 'editController'
    })
    .when('/fruta/cadastro/new', {
        templateUrl: '../partials/form.html',
        controller: 'newController'
    })
    .when('/fruta/remove/:id', {
        templateUrl: '../partials/list.html',
        controller: 'removeController'
    })
    .otherwise({redirectTo: '/'});
}]);

//Inicializando do escopo global
app.run(['$rootScope', function($rootScope) {
  console.log('app.run');
}]);
