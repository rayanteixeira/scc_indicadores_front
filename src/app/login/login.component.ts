import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from './credenciaaisDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  creds: CredenciaisDTO = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
