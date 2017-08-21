angular.module('feirinha').service('pedidosService', ['$q', '$firebaseObject', function ($q, $firebaseObject) {

    var self = this;
    self.pedidos;

    /*
     Recupera todos os pedidos pendentes. Por enquanto apenas local.
     */
    this.getPedidosPendentes = function () {
        var ref = firebase.database().ref().child("pedidos").orderByChild("status").equalTo("Pendente");
        var obj = $firebaseObject(ref);
        return obj;
    };
    
    this.getPedidosRecusados = function () {
        var ref = firebase.database().ref().child("pedidos").orderByChild("status").equalTo("Recusado");
        var obj = $firebaseObject(ref);
        return obj;
    }

    this.getPedidosAprovados = function () {
        var ref = firebase.database().ref().child("pedidos").orderByChild("status").equalTo("Aprovado");
        var obj = $firebaseObject(ref);
        return obj;
    }

}]);