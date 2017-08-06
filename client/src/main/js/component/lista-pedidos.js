angular.module('feirinha').component('listaPedidos', {
    templateUrl: 'view/lista-pedidos.html',
    scope: {
        theme: '@'
    },
    controller: ['pedidosService', function (pedidosService) {
        var self = this;

        this.getPedidos = function () {
            console.log("kk");
            return pedidosService.getTodosPedidos();
        };

        this.getColor = function (status) {
            if(status == "Pendente") return "blue";
            if(status == "Aprovado") return "green";
            if(status == "Recusado") return "red";
        }
    }]
});