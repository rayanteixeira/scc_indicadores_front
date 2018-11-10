import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
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
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpsRequestInterceptor } from './_interceptor/http-interceptor';
import { ErrorInterceptorProvider } from './_interceptor/error-Interceptor';
import { UserComponent } from './user/user.component';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    DashboardModule,
    ResumoDiarioModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    NgxCurrencyModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    UserComponent
    // MailComponent
  ],
  // providers: [AuthService],
  providers: [
    AuthenticationService,
    JwtHelper,
    AuthGuard,
    AlertService,
    StorageService,
    //AuthInterceptorProvider,
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
