// var app = angular.module('newForm', ['ngMaterial', 'ngAnimate', "ui.router"])
//
//
// app.config(function ($stateProvider, $urlRouterProvider) {
//
//     // // For any unmatched url, send to /route1
//     // $urlRouterProvider.otherwise("/app")
//
//     $stateProvider
//         .state('checkview', {
//             templateUrl: 'check-view.html',
//             controller: 'ctrl',
//             onEnter: function () {
//                 console.log('asdasdlkadljaskdss')
//             }
//         })
// });
//
// app.controller('indexCtrl', function ($state) {
//     $state.transitionTo('checkview');
// })


angular.module('feirinha', ['ngMaterial', 'ngAnimate', "ui.router", "firebase"])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    })
    // constant for the Firebase we're using
    .constant('FBURL', 'https://budegamiga-2b5e3.firebaseio.com/Pedidos');
