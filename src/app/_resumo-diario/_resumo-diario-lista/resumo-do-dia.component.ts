import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResumoDiarioService, Filtro } from '../resumo-diario.service';
import { ResumoDiario, TabelaResumosDiarios } from '../resumo-diario.model';
import { MAY } from '@angular/material';
import { empty } from 'rxjs/Observer';


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

  totalcriflococo: number = 0;
  totalcriflococoMes: number = 0;
  totalcriflococoSemana: number = 0;

  totalAguaDeCoco: number = 0;
  totalAguaDeCocoMes: number = 0;
  totalAguaDeCocoSemana: number = 0;

  tabela: TabelaResumosDiarios[];


  constructor(
    private resumoService: ResumoDiarioService
  ) { }

  ngOnInit() {
    this.cabecalhoLista();
   // this.resumoDoDia();
  }

  public buscaPorData(event) {

    this.totalDia = new ResumoDiario();
    this.totalMes = new ResumoDiario();
    this.totalSemana = []

    this.filtro.dataLancamento = event
    this.resumoService.buscarPorData(this.filtro)
      .subscribe((resumos: TabelaResumosDiarios) => {
        console.log(resumos);

        if (resumos) {

          resumos.buscaSemanal[0].forEach(semana => {
            this.totalSemana.push(semana);
          });
          this.totalDia = resumos.resumosDiarios[0];
          this.totalMes = resumos.resumosMensal[0];

          // Total Dias.
          if (this.totalDia) { 
            this.totalcriflococo = parseInt(this.totalDia.cri) + parseInt(this.totalDia.flococo);
            this.rendimento = (this.totalcriflococo / parseInt(this.totalDia.cocosProcessados)).toFixed(3);
            this.totalAguaDeCoco = parseInt(this.totalDia.aguaDeCocoSococo) + parseInt(this.totalDia.aguaDeCocoVerde);
            console.log("TEM DIA " + JSON.stringify(this.totalDia));
          } else {
            console.log('NAO TEM DIA ' + JSON.stringify(this.totalDia));
            this.totalcriflococo = 0;
            this.rendimento = 0;
            this.totalAguaDeCoco = 0;
          }

          // Total de semana
          if (this.totalSemana[0] != null || this.totalSemana[0] != undefined) {
            this.totalcriflococoSemana = parseInt(this.totalSemana[2]) + parseInt(this.totalSemana[3]);
            this.rendimentoSemana = (this.totalcriflococoSemana / parseInt(this.totalSemana[0])).toFixed(3);
            this.totalAguaDeCocoSemana = parseInt(this.totalSemana[7]) + parseInt(this.totalSemana[8]);
            console.log("Tem SEMANA >" + JSON.stringify(this.totalSemana));
          } else {
            console.log("NAO TEM  SEMANA >" + JSON.stringify(this.totalSemana[0]));
            this.totalcriflococoSemana = 0;
            this.rendimentoSemana = 0;
            this.totalAguaDeCocoSemana = 0;

          }

          // Total Mes
          if (this.totalMes) {
            this.totalcriflococoMes = parseInt(this.totalMes.cri) + parseInt(this.totalMes.flococo);
            this.rendimentoMes = (this.totalcriflococoMes / parseInt(this.totalMes.cocosProcessados)).toFixed(3);
            this.totalAguaDeCocoMes = parseInt(this.totalMes.aguaDeCocoSococo) + parseInt(this.totalMes.aguaDeCocoVerde);
            console.log("TEM MES " + JSON.stringify(this.totalMes));
          } else {
            console.log("NAO TEM MES " + JSON.stringify(this.totalMes));
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
    this.resumoService.getResumoDiario()
    .subscribe((resumos: TabelaResumosDiarios) => {
      console.log(resumos);

      if (resumos) {

        resumos.buscaSemanal[0].forEach(semana => {
          this.totalSemana.push(semana);
        });
        this.totalDia = resumos.resumosDiarios[0];
        this.totalMes = resumos.resumosMensal[0];

        // Total Dias.
        if (this.totalDia) { 
          this.totalcriflococo = parseInt(this.totalDia.cri) + parseInt(this.totalDia.flococo);
          this.rendimento = (this.totalcriflococo / parseInt(this.totalDia.cocosProcessados)).toFixed(3);
          this.totalAguaDeCoco = parseInt(this.totalDia.aguaDeCocoSococo) + parseInt(this.totalDia.aguaDeCocoVerde);
          console.log("TEM DIA " + JSON.stringify(this.totalDia));
        } else {
          console.log('NAO TEM DIA ' + JSON.stringify(this.totalDia));
          this.totalcriflococo = 0;
          this.rendimento = 0;
          this.totalAguaDeCoco = 0;
        }

        // Total de semana
        if (this.totalSemana[0] != null || this.totalSemana[0] != undefined) {
          this.totalcriflococoSemana = parseInt(this.totalSemana[2]) + parseInt(this.totalSemana[3]);
          this.rendimentoSemana = (this.totalcriflococoSemana / parseInt(this.totalSemana[0])).toFixed(3);
          this.totalAguaDeCocoSemana = parseInt(this.totalSemana[7]) + parseInt(this.totalSemana[8]);
          console.log("Tem SEMANA >" + JSON.stringify(this.totalSemana));
        } else {
          console.log("NAO TEM  SEMANA >" + JSON.stringify(this.totalSemana[0]));
          this.totalcriflococoSemana = 0;
          this.rendimentoSemana = 0;
          this.totalAguaDeCocoSemana = 0;

        }

        // Total Mes
        if (this.totalMes) {
          this.totalcriflococoMes = parseInt(this.totalMes.cri) + parseInt(this.totalMes.flococo);
          this.rendimentoMes = (this.totalcriflococoMes / parseInt(this.totalMes.cocosProcessados)).toFixed(3);
          this.totalAguaDeCocoMes = parseInt(this.totalMes.aguaDeCocoSococo) + parseInt(this.totalMes.aguaDeCocoVerde);
          console.log("TEM MES " + JSON.stringify(this.totalMes));
        } else {
          console.log("NAO TEM MES " + JSON.stringify(this.totalMes));
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
