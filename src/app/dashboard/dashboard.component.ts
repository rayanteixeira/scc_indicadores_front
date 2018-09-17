import { Component, OnInit } from '@angular/core';


import * as moment from 'moment';
import { EventEmitterService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  anoSelecionado: string = moment().format('YYYY');
  mesSelecionado: string;

  anoMesSelecionado: any


  mostrarGraficosMes: boolean = false;
  mostrarGraficosAno: boolean = false;

  mesN: string; 
  listaAnos = ['2012', '2013', '2014', '2015', '2017', '2018'];
  listaMeses: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  constructor() { }

  ngOnInit() {
    this.buscarAnoAtual(this.anoSelecionado);
  }

  buscar() {
    //Evento para recuperar mes e ano selecionado nos componetes filhos, assim a cada mudança os filhos sabem
        
    this.mostrarGraficosMes = false;
    this.mostrarGraficosAno = false;

    if (this.mesSelecionado != null || this.mesSelecionado != undefined) { // Buscar por ano e mês
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
  
      
      
      this.anoMesSelecionado = this.anoSelecionado+'-'+this.mesN+'-01'; 
      EventEmitterService.get('AnoMesSelecionado').emit(this.anoMesSelecionado);
      this.mostrarGraficosMes = true
      
    } else { // Buscar somente por ano    
      EventEmitterService.get('anoSelecionado').emit(this.anoSelecionado);
      this.mostrarGraficosAno = true
    
    }
  }

  buscarAnoAtual(ano) {
    //Evento para envia ano atual para apresentar logo um gráfico na tela
    EventEmitterService.get('anoSelecionado').emit(ano);
    this.mostrarGraficosMes = false;
    this.mostrarGraficosAno = false;

    if (this.mesSelecionado != null || this.mesSelecionado != undefined) { // Buscar por ano e mês
      this.mostrarGraficosMes = true
    } else { // Buscar somente por ano    
      this.mostrarGraficosAno = true
    }
  }

}
