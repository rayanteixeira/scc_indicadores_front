import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AuthenticationService, AlertService } from './_services';
import { AuthGuard } from './_guards';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatInputModule, MatTableModule, MatIconModule, MatDialogModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { ResumoDiarioModule } from './resumo-diario/resumo-diario.module';
import { StorageService } from './_services/storage.service';
import { JwtHelper } from 'angular2-jwt';
import { HttpsRequestInterceptor } from './_interceptor/http-interceptor';
import { ErrorInterceptorProvider } from './_interceptor/error-Interceptor';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DashboardModule,
    ResumoDiarioModule,
    AdminLayoutModule,
    UserModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    // MailComponent
  ],
  // providers: [AuthService],
  providers: [
    AuthenticationService,
    JwtHelper,
    AuthGuard,
    AlertService,
    StorageService,
    // AuthInterceptorProvider,
    ErrorInterceptorProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
