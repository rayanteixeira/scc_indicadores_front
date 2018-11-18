import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResumoDiarioService, Filtro } from '../resumo-diario.service';
import { ResumoDiario, TabelaResumosDiarios } from '../resumo-diario.model';
import * as moment from 'moment'


@Component({
  selector: 'app-resumo-diario',
  templateUrl: './resumo-do-dia.component.html',
  styleUrls: ['./resumo-do-dia.component.css']
})
export class ResumoDoDiaComponent implements OnInit {

  datePipe: any;
  @ViewChild('formulario') public formulario: NgForm;

  buscaData: Date;

  filtro: Filtro = new Filtro();

  headerRow: String[];
  resumoDiario: ResumoDiario;
  dataRows = [];

  totalSemana: ResumoDiario = new ResumoDiario();
  totalDia: ResumoDiario = new ResumoDiario();
  totalMes: ResumoDiario = new ResumoDiario();

  rendimento: any = 0;
  rendimentoMes: any = 0;
  rendimentoSemana: any = 0;

  totalcriflococo: any = 0;
  totalcriflococoMes: any = 0;
  totalcriflococoSemana: any = 0;

  totalAguaDeCoco: any = 0;
  totalAguaDeCocoMes: any = 0;
  totalAguaDeCocoSemana: any = 0;

  tabela: TabelaResumosDiarios[];

  dataAtual: any = moment().format('YYYY-MM-DD')


  constructor(
    private resumoService: ResumoDiarioService
  ) { }

  ngOnInit() {
    this.cabecalhoLista();
    this.resumoDoDia();
  }

  public buscaPorData(event) {

    this.totalDia = new ResumoDiario();
    this.totalMes = new ResumoDiario();
    this.totalSemana = new ResumoDiario();

    this.filtro.dataLancamento = event
    this.resumoService.buscarResumoPorData(this.filtro)
      .subscribe((resumos: TabelaResumosDiarios) => {
        console.log(resumos);

        if (resumos) { // se houver resumo faça...
          
          this.totalDia = resumos.resumosDiarios[0];
          this.totalSemana = resumos.buscaSemanal[0];
          this.totalMes = resumos.resumosMensal[0];

          // Total do Dia.
          if (this.totalDia) {
            this.totalcriflococo = parseFloat(this.totalDia.cri) + parseFloat(this.totalDia.flococo);
            this.rendimento = (this.totalcriflococo / (this.totalDia.cocosProcessados)).toFixed(3);
            this.totalAguaDeCoco = (parseFloat(this.totalDia.aguaDeCocoSococo) + parseFloat(this.totalDia.aguaDeCocoVerde)).toFixed(2);
          } else {
            this.totalcriflococo = 0;
            this.rendimento = 0;
            this.totalAguaDeCoco = 0;
          }

          // Total da semana
          if (this.totalSemana) {
            this.totalcriflococoSemana = parseFloat(this.totalSemana.cri) + parseFloat(this.totalSemana.flococo);
            this.rendimentoSemana = (this.totalcriflococoSemana / (this.totalSemana.cocosProcessados)).toFixed(3);
            this.totalAguaDeCocoSemana = (parseFloat(this.totalSemana.aguaDeCocoSococo) + parseFloat(this.totalSemana.aguaDeCocoVerde)).toFixed(2);
          } else {
            this.totalcriflococoSemana = 0;
            this.rendimentoSemana = 0;
            this.totalAguaDeCocoSemana = 0;

          }

          // Total do Mês
          if (this.totalMes) {
            this.totalcriflococoMes = parseFloat(this.totalMes.cri) + parseFloat(this.totalMes.flococo);
            this.rendimentoMes = (this.totalcriflococoMes / (this.totalMes.cocosProcessados)).toFixed(3);
            this.totalAguaDeCocoMes = (parseFloat(this.totalMes.aguaDeCocoSococo) + parseFloat(this.totalMes.aguaDeCocoVerde)).toFixed(2);
          } else {
            this.totalcriflococoMes = 0;
            this.rendimentoMes = 0;
            this.totalAguaDeCocoMes = 0;



          }

        } else {
          this.totalDia = new ResumoDiario();
          this.totalMes = new ResumoDiario();
          this.totalSemana = new ResumoDiario();
        }
      });
  }

  private resumoDoDia(): void {

    this.filtro.dataLancamento = this.dataAtual
    this.resumoService.buscarResumoPorData(this.filtro)
      .subscribe((resumos: TabelaResumosDiarios) => {

        if (resumos) { // se houver resumos faça...
        
          
          this.totalDia = resumos.resumosDiarios[0];
          this.totalSemana = resumos.buscaSemanal[0];
          this.totalMes = resumos.resumosMensal[0];

          // Total do Dia.
          if (this.totalDia) {
            this.totalcriflococo = parseFloat(this.totalDia.cri) + parseFloat(this.totalDia.flococo);
            this.rendimento = (this.totalcriflococo / (this.totalDia.cocosProcessados)).toFixed(3);
            this.totalAguaDeCoco = (parseFloat(this.totalDia.aguaDeCocoSococo) + parseFloat(this.totalDia.aguaDeCocoVerde)).toFixed(2);
          } else {
            this.totalcriflococo = 0;
            this.rendimento = 0;
            this.totalAguaDeCoco = 0;
          }

          // Total da semana
          if (this.totalSemana) {
            this.totalcriflococoSemana = parseFloat(this.totalSemana.cri) + parseFloat(this.totalSemana.flococo);
            this.rendimentoSemana = (this.totalcriflococoSemana / (this.totalSemana.cocosProcessados)).toFixed(3);
            this.totalAguaDeCocoSemana = (parseFloat(this.totalSemana.aguaDeCocoSococo) + parseFloat(this.totalSemana.aguaDeCocoVerde)).toFixed(2);
          } else {
            this.totalcriflococoSemana = 0;
            this.rendimentoSemana = 0;
            this.totalAguaDeCocoSemana = 0;

          }

          // Total do Mês
          if (this.totalMes) {
            this.totalcriflococoMes = parseFloat(this.totalMes.cri) + parseFloat(this.totalMes.flococo);
            this.rendimentoMes = (this.totalcriflococoMes / (this.totalMes.cocosProcessados)).toFixed(3);
            this.totalAguaDeCocoMes = (parseFloat(this.totalMes.aguaDeCocoSococo) + parseFloat(this.totalMes.aguaDeCocoVerde)).toFixed(2);
          } else {
            this.totalcriflococoMes = 0;
            this.rendimentoMes = 0;
            this.totalAguaDeCocoMes = 0;



          }

        } else {
          this.totalDia = new ResumoDiario();
          this.totalMes = new ResumoDiario();
          this.totalSemana = new ResumoDiario();
        }
      });
  }

  public cabecalhoLista(): void {
    this.headerRow = ['Total Dia', 'Total Semana', 'Total Mês'];
  }

}
