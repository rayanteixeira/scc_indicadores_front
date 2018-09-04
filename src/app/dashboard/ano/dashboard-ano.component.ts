import { Component, OnInit, Input } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { DashboardService, DashboardFilter, EventEmitterService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-ano',
  templateUrl: './dashboard-ano.component.html',
  styleUrls: ['./dashboard-ano.component.css']
})
export class DashboardAnoComponent implements OnInit {
  
  private chart: AmChart;

  data = new DashboardFilter();
  dataProvider = []
 
  mesN: string;

  @Input() anoRecebido: string;

  constructor(
    private dashboardService: DashboardService,
    private AmCharts: AmChartsService,
    
  ) { 
    //Quando o usuário escolhe outro ano e clica em buscar o EventeEmitterService.get('') envia o ano e atualiza a view
    this.emitterAno();
  }

  ngOnInit() {
    //O component pai envia o ano atual, logo chama o component filho e entra no ngOnInit e recebe os dados pelo @Input
    this.service()
  }

  emitterAno(){
    EventEmitterService.get('anoSelecionado')
    .subscribe(data => {
      this.anoRecebido = data; 
        this.service();
    });
  }

  service() {
    const anoPesquisa: any = this.anoRecebido + '-01-01'
    this.data.dataLancamento = anoPesquisa;
    this.dashboardService.buscarPorAno(this.data)
      .then(resp => {
        resp.forEach(entidade => {
          this.chart = this.AmCharts.makeChart('cocoChart', this.cocoChartOptions(entidade.cocos));
          this.chart = this.AmCharts.makeChart('criFlococoChart', this.criFlococoChartOptions(entidade.criFlococos));
          this.chart = this.AmCharts.makeChart('oleoChart', this.oleoChartChartOptions(entidade.oleos));
          this.chart = this.AmCharts.makeChart('tortaChart', this.tortaChartOptions(entidade.tortas));
          this.chart = this.AmCharts.makeChart('aguaCocoChart', this.aguaCocoChartOptions(entidade.aguaCocos));
          this.chart = this.AmCharts.makeChart('caixaPadraoChart', this.caixaPadraoChartOptions(entidade.caixaPadraos));
          this.chart = this.AmCharts.makeChart('cocoGerminadoChart', this.cocoGerminadoChartOptions(entidade.cocoGerminados));
          this.chart = this.AmCharts.makeChart('totalCacambaChart', this.totalCacambaChartOptions(entidade.totalCacambas));
          this.chart = this.AmCharts.makeChart('totalFardosChart', this.totalFardosChartOptions(entidade.totalFardos));
        }
        );

      });
  };

  // SOCOCO
  private cocoChartOptions(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'mesLancamento',
      'dataProvider': dataProvider,
      'graphs': [{
        'id': 'idGraphs',
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>Desfibrado: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'cocoDesfibrados'
      }, {
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>Processado: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'cocoProcessados'
      }],
    };
  }

  private criFlococoChartOptions(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'mesLancamento',
      'dataProvider': dataProvider,
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>CRI: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'cri'
      }, {
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>Flococo: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'flococo'
      }]
    };
  }

  private oleoChartChartOptions(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'mesLancamento',
      'dataProvider': dataProvider,
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>Tipo A: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'oleoIndustrialTipoA'
      }, {
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>E.T.E.: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'oleoIndustrialETE'
      }]
    };
  }

  private tortaChartOptions(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'mesLancamento',
      'dataProvider': dataProvider,
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>Torta: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'torta'
      }]
    };
  }

  // ACQUA
  private aguaCocoChartOptions(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'mesLancamento',
      'dataProvider': dataProvider,
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>Água C. Sococo: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'aguaDeCocoSococo'
      }, {
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>Água C. Verde: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'aguaDeCocoVerde'
      }]
    };
  }

  private cocoGerminadoChartOptions(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'mesLancamento',
      'dataProvider': dataProvider,
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>% C. Germinado: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'cocoGerminado'
      }]
    };
  }

  private totalCacambaChartOptions(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'mesLancamento',
      'dataProvider': dataProvider,
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>Caçambas: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'totalCacamba'
      }]
    };
  }

  private caixaPadraoChartOptions(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'mesLancamento',
      'dataProvider': dataProvider,
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>Caixa Padrão: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'caixaPadrao'
      }]
    };
  }

  // AMAFIBRA
  private totalFardosChartOptions(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'mesLancamento',
      'dataProvider': dataProvider,
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>Fardos: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'numeroFardos'
      }]
    };
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    // clearInterval(this.timer);

    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
