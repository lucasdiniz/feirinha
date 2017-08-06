angular.module('feirinha').config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.when("/", "/home");

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './view/home.html',
            controller: 'homeController as homeCtrl'
        })
});
