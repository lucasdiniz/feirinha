angular.module('feirinha').controller('relatoriosController', ['pedidosService', function (pedidosService) {
    var self = this;
    self.pedidos;
    self.aprovados = 0;
    self.recusados = 0;
    this.canShow = true;

    pedidosService.getPedidosAprovados().$loaded().then(function (data) {
        self.pedidos = data;
        pedidosService.getPedidosRecusados().$loaded().then(function (data2) {
            _.assign(self.pedidos, data2);
            generateStatistics();
            self.canShow = false;
        });
    });


    function makeHighCharter(divName, dados, tooltipName){
        Highcharts.chart(divName, {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: dados[0].name
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'blue'
                        }
                    }
                }
            },
            series: dados
        });
    }

    function makeChartDoacoes(divName, dados) {
        Highcharts.chart(divName, {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: dados[0].name
            },
            tooltip: {
                pointFormat: '<b>{series.name}</b>: {point.percentage:.1f} %'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}: <b>R$ {point.y}</b>',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'blue'
                        }
                    }
                }
            },
            series: dados
        });
    }


    function generateStatistics(){
        var copy = [];
        for(key in Object.keys(self.pedidos)){
            if(self.pedidos[key] != undefined) {
                var pedido = self.pedidos[key];
                copy.push(pedido)
            }
        }
        // console.log(copy);
        var dadosProdutosAprovados = {"data": [], name: 'Unidades Vendidas', colorByPoint: true};
        var dadosProdutosRecusados = {"data": [], name: 'Unidades não-vendidas (pedidos recusados)', colorByPoint: true};

        for(key in copy){
            var pedido = copy[key];
            console.log(pedido);
            if(pedido.status == "Recusado") self.recusados += 1;
            else self.aprovados += 1;


            for(nomeProduto in pedido.produtos){
                var quantidade = pedido.produtos[nomeProduto];
                if(pedido.status == "Recusado")
                    dadosProdutosRecusados.data.push({name: nomeProduto, y: quantidade});
                else
                    dadosProdutosAprovados.data.push({name: nomeProduto, y: quantidade});
            }

        }

        var dadosStatus = [{
            name: 'Total de pedidos',
            colorByPoint: true,
            data: [{
                name: 'Recusados',
                y: self.recusados
            }, {
                name: 'Aprovados',
                y: self.aprovados,
                sliced: true,
                selected: true
            }]
        }];

        var dadosDoacoes = [{
            name: 'Quantitativo de doações recebidas',
            colorByPoint: true,
            data: [{
                name: 'Hospital do Câncer',
                y: 15.0
            }, {
                name: 'Alcoolicos Anônimos',
                y: 50.5,
                sliced: true,
                selected: true
            },{
                name: 'Instituto Recuperando Vidas',
                y: 27.6
            }]
        }];


        makeHighCharter("statusChart", dadosStatus);
        makeHighCharter("produtosAprovadosChart", [dadosProdutosAprovados]);
        makeHighCharter("produtosRecusadosChart", [dadosProdutosRecusados]);
        makeChartDoacoes("doacoesChart", dadosDoacoes);
    }

}]);