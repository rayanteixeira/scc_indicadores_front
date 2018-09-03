import { Component, OnInit } from '@angular/core';
import { DashboardFilter, DashboardService } from './dashboard.service';
import { AmChart, AmChartsService } from '@amcharts/amcharts3-angular';

import * as moment from 'moment';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  anoSelecionado: string;
  mesSelecionado: string;
  mesN: string;

  chart: AmChart;

  mostrarGraficosMes: boolean = false;
  mostrarGraficosAno: boolean = false;

  data = new DashboardFilter();
  dataAtual: any;
  listaAnos = ['2012', '2013', '2014', '2015', '2017', '2018'];
  listaMeses: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  constructor(private dashboardService: DashboardService, private AmCharts: AmChartsService) { }

  ngOnInit() {
    const date = new Date()
    this.dataAtual = moment(date).format('YYYY-MM-DD')
  }

  buscar() {

    if (this.mesSelecionado != null || this.mesSelecionado != undefined) { // Buscar por ano e mês
      this.buscarPorMes();
    } else { // Buscar somente por ano
      this.buscarPorAno();
    }
  }

  buscarPorMes() {
    switch (this.mesSelecionado) { // Busca por ano e mês
      case 'Janeiro': { this.mesN = '01'; break }
      case 'Fevereiro': { this.mesN = '02'; break }
      case 'Março': { this.mesN = '03'; break }
      case 'Abril': { this.mesN = '04'; break }
      case 'Maio': { this.mesN = '05'; break }
      case 'Junho': { this.mesN = '06'; break }
      case 'Julho': { this.mesN = '07'; break }
      case 'Agosto': { this.mesN = '08'; break }
      case 'Setembro': { this.mesN = '09'; break }
      case 'Outubro': { this.mesN = '10'; break }
      case 'Novembro': { this.mesN = '11'; break }
      case 'Dezembro': { this.mesN = '12'; break }
    }

    const mesPesquisa: any = this.anoSelecionado + '-' + this.mesN
    this.data.dataLancamento = mesPesquisa;
    this.dashboardService.buscarPorMes(this.data)
      .then((resp) => {
        resp.forEach(entidade => {
          this.chart = this.AmCharts.makeChart('cocoChart', this.cocoChartOptionsDia(entidade.cocos));
          this.chart = this.AmCharts.makeChart('criFlococoChart', this.criFlococoChartOptionsDia(entidade.criFlococos));
          this.chart = this.AmCharts.makeChart('oleoChart', this.oleoChartChartOptionsDia(entidade.oleos));
          this.chart = this.AmCharts.makeChart('tortaChart', this.tortaChartOptionsDia(entidade.tortas));
          this.chart = this.AmCharts.makeChart('aguaCocoChart', this.aguaCocoChartOptionsDia(entidade.aguaCocos));
          this.chart = this.AmCharts.makeChart('caixaPadraoChart', this.caixaPadraoChartOptionsDia(entidade.caixaPadraos));
          this.chart = this.AmCharts.makeChart('cocoGerminadoChart', this.cocoGerminadoChartOptionsDia(entidade.cocoGerminados));
          this.chart = this.AmCharts.makeChart('totalCacambaChart', this.totalCacambaChartOptionsDia(entidade.totalCacambas));
          this.chart = this.AmCharts.makeChart('totalFardosChart', this.totalFardosChartOptionsDia(entidade.totalFardos));
        });
        this.mostrarGraficosMes = true
      });
  }

  buscarPorAno() {
    const anoPesquisa: any = this.anoSelecionado + '-01-01'
    this.data.dataLancamento = anoPesquisa;
    this.dashboardService.buscarPorAno(this.data)
      .then((resp) => {
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
        });

        this.mostrarGraficosMes = false;
        this.mostrarGraficosAno = true

      });
  }

  ngOnDestroy() {
    // clearInterval(this.timer);
    console.log(this.chart)
    if (this.chart) {
      console.log('ngOnDestroy')
      this.AmCharts.destroyChart(this.chart);
    }
  }





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



  //-------------------------------------------------------------------

  // SOCOCO
  private cocoChartOptionsDia(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'diaLancamento',
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

  private criFlococoChartOptionsDia(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'diaLancamento',
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

  private oleoChartChartOptionsDia(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'diaLancamento',
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

  private tortaChartOptionsDia(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'diaLancamento',
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
  private aguaCocoChartOptionsDia(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'diaLancamento',
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

  private cocoGerminadoChartOptionsDia(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'diaLancamento',
      'dataProvider': dataProvider,
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>% C. Germinado: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'cocoGerminado'
      }]
    };
  }

  private totalCacambaChartOptionsDia(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'diaLancamento',
      'dataProvider': dataProvider,
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>Caçambas: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'totalCacamba'
      }]
    };
  }

  private caixaPadraoChartOptionsDia(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'diaLancamento',
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
  private totalFardosChartOptionsDia(dataProvider) {
    return {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'diaLancamento',
      'dataProvider': dataProvider,
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style=\'font-size:10px;\'>Fardos: [[value]]</span></b>',
        'fillAlphas': 0.9,
        'type': 'column',
        'valueField': 'numeroFardos'
      }]
    };
  }





}
