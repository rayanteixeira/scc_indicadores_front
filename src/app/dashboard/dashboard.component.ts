import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dia: boolean;
  mes = true;

  constructor() { }

  ngOnInit() {
  }

  selecionarDia() {
    this.dia = true;
    this.mes = false;
  }
  selecionarMes() {
    this.dia = false;
    this.mes = true;
  }

}
