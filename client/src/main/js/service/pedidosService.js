angular.module('feirinha').service('pedidosService', ['$q', function ($q) {

    var self = this;

    var pedidos = [
        {
            usuario: {nome: "Lucas", foto: "https://scontent.fcpv3-1.fna.fbcdn.net/v/t1.0-9/20621338_1500901673310802_142952303273340208_n.jpg?oh=c0149bcf587a4fe3260a27d07fd4baa4&oe=59ED2473"},
            produtos: [
                {nome: "Arroz Branco", quantidade: 1},
                {nome: "Feijão Preto", quantidade: 1},
                {nome: "Água mineral", quantidade: 1}
            ],
            status: "Pendente"
        },
        {
            usuario: {nome: "Amanda", foto: "https://scontent.fcpv3-1.fna.fbcdn.net/v/t1.0-9/18813211_1574448559234733_6508926708440905416_n.jpg?oh=5711f3ba396ecc1112578c21e77cf033&oe=5A30DCCF"},
            produtos: [
                {nome: "Carteira de Derby", quantidade: 5},
                {nome: "Grade de Skol", quantidade: 3},
                {nome: "Vinho Pinheirense", quantidade: 10}
            ],
            status: "Aprovado"
        },
        {
            usuario: {nome: "Gustavo", foto: "https://scontent.fcpv3-1.fna.fbcdn.net/v/t1.0-9/12728868_997039777042635_2680224942150063859_n.jpg?oh=4508bd57c2872a93e6ed89a77df35548&oe=5A27CC24"},
            produtos: [
                {nome: "Sal", quantidade: 3},
                {nome: "Farinha", quantidade: 2},
                {nome: "Açúcar", quantidade: 4}
            ],
            status: "Recusado"
        }
    ];

    /*
    Recupera todos os pedidos. Por enquanto apenas local.
     */
    this.getTodosPedidos = function () {
        console.log('pedidosService');
        console.log(pedidos);
        return pedidos;
        return $q.when(pedidos);
    }

}]);