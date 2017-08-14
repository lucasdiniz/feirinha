angular.module('feirinha').service('modalService', ['$mdDialog', function($mdDialog) {
    var self = this;

    this.showConfirm = function(title, message) {
        //About multiple: https://github.com/angular/material/issues/8630
        const modal = $mdDialog.confirm()
            .title(title)
            //.theme($rootScope.theme)
            .textContent(message)
            .multiple(true)
            .cancel('Não')
            .ok('Sim');

        return $mdDialog.show(modal);
    };

}]);