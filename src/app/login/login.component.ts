import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { first } from 'rxjs/operators';
<<<<<<< HEAD
import { AuthenticationService, AlertService } from '../_services';
=======
import { AuthenticationService, AlertService } from '../_services';;



>>>>>>> 1f04ba96f68fb36a6ba916fa45eb67051a63bcbb
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
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
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

<<<<<<< HEAD
    this.auth.login(creds)
=======

    this.authenticationService.login(credentials)
>>>>>>> 1f04ba96f68fb36a6ba916fa45eb67051a63bcbb
      .pipe(first())
      .subscribe(
        resp => {
          this.auth.successfulLogin(resp.headers.get('authorization')); // Pega o token e coloca LocalStoge

          this.router.navigate(['/resumo-do-dia']);
        },
        error => {
<<<<<<< HEAD
          console.log(error.status);
          
          this.alertService.error(error.error);
          this.loading = false;
=======
          this.alertService.error(error);
          // this.loading = false;
>>>>>>> 1f04ba96f68fb36a6ba916fa45eb67051a63bcbb
        });
  }
}
