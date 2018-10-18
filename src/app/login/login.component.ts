import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService, AlertService } from '../_services';
import { StorageService } from '../_services/storage.service';


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

  returnUrl: string

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private localStorage: StorageService
  ) { }

  ngOnInit() {
    this.form();
    this.localStorage.removeToken()
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
    // stop here if form is invalid
    if (this.formulario.invalid) {
      return;
    }

    this.authenticationService.login(creds)
      .pipe(first())
      .subscribe(
        resp => {
          this.localStorage.saveToken(resp.headers.get('Authorization'));
          this.router.navigate(['/resumo-do-dia']);
        },
        error => {
          console.log('Erro login: ' + error.status);
          this.alertService.error(error.error);
        });
  }
}
