import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService, AlertService } from '../_services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  username: string;
  password: string;

  loading = false;
  submitted = false;
  returnUrl: string

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form();

    // reset login status
    // this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  form() {
    this.formulario = this.fb.group({
      'username': new FormControl(this.username, Validators.required),
      'password': new FormControl(this.password, Validators.required),
    });
  }


  onSubmit(formulario: FormGroup, formDirective: FormGroupDirective) {
    const creds: any = formulario;
    console.log(creds)
    this.loading = true;
    this.submitted = true;

    // stop here if form is invalid
    if (this.formulario.invalid) {
      return;
    }

    this.auth.login(creds)
      .pipe(first())
      .subscribe(
        resp => {
          this.auth.successfulLogin(resp.headers.get('Authorization'));

          this.router.navigate(['dashboard']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  /*
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
  }*/
}
