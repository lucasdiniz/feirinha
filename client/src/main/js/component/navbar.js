angular.module('feirinha').component('navbar', {
    templateUrl: 'view/navbar.html',
    scope: {
        theme: '@'
    },
    controller: ['$state', function ($state) {
        var self = this;

        this.showReports = function () {

            $state.go('app.relatorios', {});

        };
    }]
});