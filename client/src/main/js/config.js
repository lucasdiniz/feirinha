angular.module('feirinha').config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when("", "/app/pedidos");
    $urlRouterProvider.when("/", "/app/pedidos");

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/app/pedidos");

    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: './view/home.html',
            abstract: true
        })
        .state('app.pedidos', {
            url: '/pedidos',
            templateUrl: './view/lista-pedidos.html',
            controller: 'pedidosController as pedidosCtrl'
            
        })
        .state('app.relatorios', {
            url: '/relatorios',
            templateUrl: './view/relatorios.html',
            controller: 'relatoriosController as relatoriosCtrl'
        })
});
