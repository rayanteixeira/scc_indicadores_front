import { Component, OnInit, Inject } from '@angular/core';
import { ResumoDiarioService } from '../_resumo-diario/resumo-diario.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material';

export interface Destinatario {
  id: number;
  nome: string;
  email: string;
  destinatario: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  displayedColumns: string[];
  dataSource: Destinatario[] = [];

  constructor(
    private sococoService: ResumoDiarioService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.destinatario();
    this.displayedColumns = ['nome', 'email', 'acao'];
  }

  public destinatario() {
    this.sococoService.destinatario()
      .subscribe((usuario) => {
        this.dataSource = usuario;
      })
  };

  openDialog(element): void {
    const dialogRef = this.dialog.open(RemoveDialog,{
      //width: '250px',
      data: element
    });


    dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        console.log(`Dialog result: ${result}` + ' ' + element.nome);
        this.sococoService.removeDestinatario(element)
        .subscribe((usuario) => {
          this.dataSource = usuario;
          this.destinatario();
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
    @Inject(MAT_DIALOG_DATA) public data: Destinatario){

  }
}
