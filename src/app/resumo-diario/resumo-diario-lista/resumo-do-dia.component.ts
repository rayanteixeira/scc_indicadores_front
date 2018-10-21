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

  totalSemana = [];
  totalDia: ResumoDiario = new ResumoDiario();
  totalMes: ResumoDiario = new ResumoDiario();

  rendimento: any = 0;
  rendimentoMes: any = 0;
  rendimentoSemana: any = 0;

  totalcriflococo = 0;
  totalcriflococoMes = 0;
  totalcriflococoSemana = 0;

  totalAguaDeCoco = 0;
  totalAguaDeCocoMes = 0;
  totalAguaDeCocoSemana = 0;

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
    this.totalSemana = []

    this.filtro.dataLancamento = event
    this.resumoService.buscarResumoPorData(this.filtro)
      .subscribe((resumos: TabelaResumosDiarios) => {
        console.log(resumos);

        if (resumos) { // se houver resumo faça...

          resumos.buscaSemanal[0].forEach(semana => {
            this.totalSemana.push(semana);
          });
          this.totalDia = resumos.resumosDiarios[0];
          this.totalMes = resumos.resumosMensal[0];

          // Total do Dia.
          if (this.totalDia) {
            this.totalcriflococo = (this.totalDia.cri) + (this.totalDia.flococo);
            this.rendimento = (this.totalcriflococo / (this.totalDia.cocosProcessados)).toFixed(3);
            this.totalAguaDeCoco = (this.totalDia.aguaDeCocoSococo) + (this.totalDia.aguaDeCocoVerde);
          } else {
            this.totalcriflococo = 0;
            this.rendimento = 0;
            this.totalAguaDeCoco = 0;
          }

          // Total da semana
          if (this.totalSemana[0] != null || this.totalSemana[0] !== undefined) {
            this.totalcriflococoSemana = (this.totalSemana[2]) + (this.totalSemana[3]);
            this.rendimentoSemana = (this.totalcriflococoSemana / (this.totalSemana[0])).toFixed(3);
            this.totalAguaDeCocoSemana = (this.totalSemana[7]) + (this.totalSemana[8]);
          } else {
            this.totalcriflococoSemana = 0;
            this.rendimentoSemana = 0;
            this.totalAguaDeCocoSemana = 0;

          }

          // Total do Mês
          if (this.totalMes) {
            this.totalcriflococoMes = (this.totalMes.cri) + (this.totalMes.flococo);
            this.rendimentoMes = (this.totalcriflococoMes / (this.totalMes.cocosProcessados)).toFixed(3);
            this.totalAguaDeCocoMes = (this.totalMes.aguaDeCocoSococo) + (this.totalMes.aguaDeCocoVerde);
          } else {
            this.totalcriflococoMes = 0;
            this.rendimentoMes = 0;
            this.totalAguaDeCocoMes = 0;



          }

        } else {
          this.totalDia = new ResumoDiario();
          this.totalMes = new ResumoDiario();
          this.totalSemana = []
        }
      });
  }

  private resumoDoDia(): void {

    this.filtro.dataLancamento = this.dataAtual
    this.resumoService.buscarResumoPorData(this.filtro)
      .subscribe((resumos: TabelaResumosDiarios) => {

        if (resumos) { // se houver resumos faça...
          resumos.buscaSemanal[0].forEach(semana => {
            this.totalSemana.push(semana);
          });
          this.totalDia = resumos.resumosDiarios[0];
          this.totalMes = resumos.resumosMensal[0];

          // Total do Dia.
          if (this.totalDia) {
            this.totalcriflococo = (this.totalDia.cri) + (this.totalDia.flococo);
            this.rendimento = (this.totalcriflococo / (this.totalDia.cocosProcessados)).toFixed(3);
            this.totalAguaDeCoco = (this.totalDia.aguaDeCocoSococo) + (this.totalDia.aguaDeCocoVerde);
          } else {
            this.totalcriflococo = 0;
            this.rendimento = 0;
            this.totalAguaDeCoco = 0;
          }

          // Total da semana
          if (this.totalSemana[0] != null || this.totalSemana[0] !== undefined) {
            this.totalcriflococoSemana = (this.totalSemana[2]) + (this.totalSemana[3]);
            this.rendimentoSemana = (this.totalcriflococoSemana / (this.totalSemana[0])).toFixed(3);
            this.totalAguaDeCocoSemana = (this.totalSemana[7]) + (this.totalSemana[8]);
          } else {
            this.totalcriflococoSemana = 0;
            this.rendimentoSemana = 0;
            this.totalAguaDeCocoSemana = 0;

          }

          // Total do Mês
          if (this.totalMes) {
            this.totalcriflococoMes = (this.totalMes.cri) + (this.totalMes.flococo);
            this.rendimentoMes = (this.totalcriflococoMes / (this.totalMes.cocosProcessados)).toFixed(3);
            this.totalAguaDeCocoMes = (this.totalMes.aguaDeCocoSococo) + (this.totalMes.aguaDeCocoVerde);
          } else {
            this.totalcriflococoMes = 0;
            this.rendimentoMes = 0;
            this.totalAguaDeCocoMes = 0;



          }

        } else {
          this.totalDia = new ResumoDiario();
          this.totalMes = new ResumoDiario();
          this.totalSemana = []
        }
      });
  }

  public cabecalhoLista(): void {
    this.headerRow = ['Total Dia', 'Total Semana', 'Total Mês'];
  }

}
