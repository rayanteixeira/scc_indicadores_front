import { Component, OnInit, Inject } from '@angular/core';
import { ResumoDiarioService } from '../_resumo-diario/resumo-diario.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material';
import { Validators, FormControl, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

export interface Destinatario {
  id: number;
  nome: string;
  email: string;
  //  destinatario: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  formulario: FormGroup;
  displayedColumns: string[];
  dataSource: Destinatario[] = [];

  constructor(
    private sococoService: ResumoDiarioService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.destinatarios();
    this.displayedColumns = ['nome', 'email', 'excluir'];
    this.form();
  }



  form() {
    this.formulario = this.fb.group({
      'nome': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.email)
    })
  }

  destinatarios() {
    this.sococoService.destinatario()
      .subscribe((destinatario) => {
        this.dataSource = destinatario;
      })
  };

  adicionarDestinatario(formulario: FormGroup, formDirective: FormGroupDirective) {
    this.sococoService.salvarDestinatario(formulario)
      .subscribe((destinatario) => {
        this.dataSource.push(destinatario);
        formDirective.resetForm();
        this.formulario.reset();
        this.destinatarios();
      });
  }

  modalExcluir(element): void {
    const dialogRef = this.dialog.open(RemoveDialog, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.sococoService.removeDestinatario(element)
          .subscribe((resp) => {
            if(resp.status == 200){
              this.dataSource = this.dataSource.filter(e => e !== element);
              this.destinatarios();
            }
          })
      }
    });
  }
}

@Component({
  selector: 'remove-dialog',
  templateUrl: './remove-dialog.html',
})
export class RemoveDialog {
  constructor(
    public dialogRef: MatDialogRef<RemoveDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Destinatario) {

  }
}
