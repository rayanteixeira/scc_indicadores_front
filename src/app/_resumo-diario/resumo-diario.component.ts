import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { ResumoDiarioService } from './resumo-diario.service';

@Component({
  selector: 'app-resumo-diario',
  templateUrl: './resumo-diario.component.html',
  styleUrls: []
})
export class ResumoDiarioComponent implements OnInit {



  date = new Date();

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

  onSubmit(formulario: FormGroup) {
    console.log(formulario);
    this.loader = true;
    this.resumoService.adicionar(formulario)
      .subscribe(response => {
        console.log(response);


        this.formulario.reset();

        this.loader = false;
      });


  }

  private form() {
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

}
