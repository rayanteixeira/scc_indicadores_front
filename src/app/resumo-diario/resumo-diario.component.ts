import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ResumoDiarioService } from './resumo-diario.service';
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';

import * as moment from 'moment'


@Component({
  selector: 'app-resumo-diario',
  templateUrl: './resumo-diario.component.html',
  styleUrls: ['./resumo-diario.component.css']
})
export class ResumoDiarioComponent implements OnInit {


  formulario: FormGroup;

  loader = false;

  inputVazio: string;

  dataAtual: any = moment().format('YYYY-MM-DD')

  constructor(
    private title: Title,
    private fb: FormBuilder,
    private resumoService: ResumoDiarioService,
  ) { }

  ngOnInit() {
    this.title.setTitle('Cadastro lançamento');
    this.form();
  }



  form() {
    this.formulario = this.fb.group({
      'dataLancamento': new FormControl(this.dataAtual, Validators.required),
      'cocosDesfibrados': new FormControl(this.inputVazio, Validators.required),
      'cocosProcessados': new FormControl(this.inputVazio, Validators.required),
      'cri': new FormControl(this.inputVazio, Validators.required),
      'flococo': new FormControl(this.inputVazio, Validators.required),
      'oleoIndustrialETE': new FormControl(this.inputVazio, Validators.required),
      'oleoIndustrialTipoA': new FormControl(this.inputVazio, Validators.required),
      'torta': new FormControl(this.inputVazio, Validators.required),
      'aguaDeCocoSococo': new FormControl(this.inputVazio, Validators.required),
      'aguaDeCocoVerde': new FormControl(this.inputVazio, Validators.required),
      'numeroDeFardos': new FormControl(this.inputVazio, Validators.required),
      'porcentagemCocoGerminado': new FormControl(this.inputVazio, Validators.required),
      'caixaPadrao': new FormControl(this.inputVazio, Validators.required),
      'totalDeCacambas': new FormControl(this.inputVazio, Validators.required),
    })
  }

  onSubmit(formulario: FormGroup, formDirective: FormGroupDirective) {
    this.loader = true;
    this.resumoService.salvarResumo(formulario)
      .subscribe(response => {
        console.log(response);
        formDirective.resetForm();
        this.formulario.reset();
        this.loader = false;
      });


  }

}
