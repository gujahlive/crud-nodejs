var app = angular.module('main', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../partials/list.html',
        controller: 'listController'
    })
    .when('/fruta/form/:id', {
        templateUrl: '../partials/form.html',
        controller: 'saveFruit'
    })
    .when('/fruta/form', {
        templateUrl: '../partials/form.html',
        controller: 'saveFruit'
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
