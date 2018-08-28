import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResumoDiarioService, Filtro } from '../resumo-diario.service';
import { ResumoDiario, TabelaResumosDiarios } from '../resumo-diario.model';
import { MAY } from '@angular/material';


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
  rendimento: any;
  totalcriflococo: number;
  totalAguaDeCoco: number;

  tabela: TabelaResumosDiarios[];


  constructor(
    private sococoService: ResumoDiarioService
  ) { }

  ngOnInit() {
    this.listaHeaderRow();
    //  this.getResumoDiario();
  }

  public buscaPorData(event) {

    // this.dataRows = [];
    // this.totalMes = [];
    this.totalSemana = [];

    this.filtro.dataLancamento = event
    this.sococoService.buscarPorData(this.filtro)
      .subscribe((resumos: TabelaResumosDiarios) => {
        console.log(resumos);

        resumos.buscaSemanal[0].forEach(semana => {
          this.totalSemana.push(semana)
        })

        this.totalDia = resumos.resumosDiarios[0];
        this.totalMes = resumos.resumosMensal[0];

      });
  }

  private getResumoDiario(): void {
    this.sococoService.getResumoDiario()
      .subscribe((resumoDiario: ResumoDiario[]) => {
        console.log(resumoDiario);
        if (resumoDiario.length > 0) {
          this.dataRows = resumoDiario;
          // TOTAL DE CRI & FLOCOCO // TOTAL DE RENDIMENTO
          this.dataRows.forEach(resumo => {
            this.filtro.dataLancamento = resumo.dataLancamento;
            // tslint:disable-next-line:radix
            this.totalcriflococo = parseInt(resumo.cri) + parseInt(resumo.flococo);
            // tslint:disable-next-line:radix
            this.rendimento = (this.totalcriflococo / parseInt(resumo.cocosProcessados)).toFixed(3);
            // tslint:disable-next-line:radix
            this.totalAguaDeCoco = parseInt(resumo.aguaDeCocoSococo) + parseInt(resumo.aguaDeCocoVerde)
          });
        } else {
          this.dataRows = [];
          this.totalcriflococo = 0;
          this.rendimento = 0;
          this.totalAguaDeCoco = 0;
          const resumo = new ResumoDiario(null, null, null, null, null, null, null, null, null, null, null, null, null, null);
          this.dataRows.push(resumo)
        }
      });
  }

  public listaHeaderRow(): void {
    this.headerRow = ['1º Turno', '2º Turno', 'Total Dia', 'Total Semana', 'Total Mês'];
  }

}
