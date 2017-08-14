angular.module('feirinha').service('toastService', ['$mdToast', function($mdToast) {
    var self = this;

    this.showActionToast = function (options) {
        if (!_.isObject(options)) {
            options = {
                textContent: options,
                action: 'OK',
                position: 'bottom left',
                hideDelay: 2000 //2 segundos
            };
        }
        var toast = $mdToast.simple()
            .textContent(options.textContent)
            .action(options.action || 'DONE')
            .highlightAction(options.highlightAction || true)
            .hideDelay(options.hideDelay || false)
            .position(options.position || 'top right');
        return $mdToast.show(toast);
    };

}]);