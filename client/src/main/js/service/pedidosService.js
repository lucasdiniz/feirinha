angular.module('feirinha').service('pedidosService', ['$q', '$firebaseObject', function ($q, $firebaseObject) {

    var self = this;
    self.pedidos;

    /*
     Recupera todos os pedidos. Por enquanto apenas local.
     */
    this.getTodosPedidos = function () {
        var ref = firebase.database().ref().child("Pedidos");
        var obj = $firebaseObject(ref);
        return obj;
    };


}]);