var app = angular.module('main', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../partials/list.html',
        controller: 'listController'
    })
    .when('/fruta/form/', {
        templateUrl: '../partials/form.html',
        controller: 'saveFruit'
    })
    .when('/fruta/form/:id', {
        templateUrl: '../partials/form.html',
        controller: 'editFruit'
    })
    .when('/fruta/remove/:id', {
        templateUrl: '../partials/list.html',
        controller: 'removeFruit'
    })
    .otherwise({redirectTo: '/'});
}]);

//Inicializando do escopo global
app.run(['$rootScope', function($rootScope) {
  console.debug('app.run');
}]);
