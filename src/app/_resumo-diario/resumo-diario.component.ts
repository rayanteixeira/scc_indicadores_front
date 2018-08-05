import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ResumoDiarioService } from './resumo-diario.service';
import {FormControl, Validators,  FormGroup, FormBuilder, FormGroupDirective} from '@angular/forms';




@Component({
  selector: 'app-resumo-diario',
  templateUrl: './resumo-diario.component.html',
  styleUrls: []
})
export class ResumoDiarioComponent implements OnInit {


  formulario: FormGroup;

  loader = false;

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
      'cocosDesfibrados': new FormControl('', Validators.required),
      'cocosProcessados': new FormControl('', Validators.required),
      'cri': new FormControl('', Validators.required),
      'flococo': new FormControl('', Validators.required),
      'oleoIndustrialETE': new FormControl('', Validators.required),
      'oleoIndustrialTipoA': new FormControl('', Validators.required),
      'torta': new FormControl('', Validators.required),
      'aguaDeCocoSococo': new FormControl('', Validators.required),
      'aguaDeCocoVerde': new FormControl('', Validators.required),
      'numeroDeFardos': new FormControl('', Validators.required),
      'porcentagemCocoGerminado': new FormControl('', Validators.required),
      'caixaPadrao': new FormControl('', Validators.required),
      'totalDeCacambas': new FormControl('', Validators.required),
    })
  }

  onSubmit(formulario: FormGroup, formDirective: FormGroupDirective ) {
    console.log(formulario);
    this.loader = true;
    this.resumoService.adicionar(formulario)
      .subscribe(response => {
        console.log(response);

        formDirective.resetForm();
        this.formulario.reset();
        this.loader = false;
      });


  }

}
