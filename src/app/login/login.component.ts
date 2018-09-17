import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }
  formulario: FormGroup;

  ngOnInit() {
    this.form();
    
  }

  form() {
    this.formulario = this.fb.group({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    })
  }

  onSubmit(formulario: FormGroup, formDirective: FormGroupDirective ) {
    const credencial: any = formulario;
    console.log(credencial)
    if (credencial.username == 'admin' && credencial.username == 'admin') {
      this.router.navigate(["resumo-do-dia"]);
     
      formDirective.resetForm();
      this.formulario.reset();
    } else {
      alert("Invalid credentials");
    }
  }

  

}

