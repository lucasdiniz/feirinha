angular.module('feirinha').component('listaPedidos', {
    templateUrl: 'view/lista-pedidos.html',
    scope: {
        theme: '@'
    },
    controller: ['pedidosService', function (pedidosService) {
        var self = this;
        self.pedidos= {pedidos: ""};

        pedidosService.getTodosPedidos().$loaded().then(function (data) {
            self.pedidos = data;
            console.log(self.pedidos.pedidos);
        });

        this.getPedidos = function () {
            return self.pedidos.pedidos;
        };

        this.getColor = function (status) {
            if(status == "Pendente") return "blue";
            if(status == "Aprovado") return "green";
            if(status == "Recusado") return "red";
        };

        function salva(){
            self.pedidos.$save();
        }

        this.aprovaPedido = function (index) {
            self.pedidos.pedidos[index].status = "Aprovado";
            salva();
        };

        this.recusaPedido = function (index) {
            self.pedidos.pedidos[index].status = "Recusado";
            salva();
        };
        
        this.podeAlterarStatus = function (index) {
            return self.pedidos.pedidos[index].status != "Pendente";
        }
    }]
});