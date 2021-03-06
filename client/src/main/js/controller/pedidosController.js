angular.module('feirinha').controller('pedidosController', ['pedidosService', 'modalService', 'toastService', function (pedidosService, modalService, toastService) {
    var self = this;
    self.pedidos;
    this.canShow = true;

    pedidosService.getPedidosPendentes().$loaded().then(function (data) {
        // console.log(data);
        self.pedidos = data;
        console.log(self.pedidos);
        self.canShow = false;
    });

    this.getPedidos = function () {
        return self.pedidos;
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
        modalService.showConfirm("Aprovar pedido", "Deseja aprovar o pedido?").then(function () {
            self.pedidos[index].status = "Aprovado";
            salva();
            toastService.showActionToast("Pedido aprovado com sucesso!");
        }, function () {

        });
    };

    this.recusaPedido = function (index) {
        modalService.showConfirm("Recusar pedido", "Deseja recusar o pedido?").then(function () {
            self.pedidos[index].status = "Recusado";
            salva();
            toastService.showActionToast("Pedido recusado com sucesso!");
        }, function () {

        });
    };

    this.podeAlterarStatus = function (index) {
        return self.pedidos[index].status != "Pendente";
    }
}]);