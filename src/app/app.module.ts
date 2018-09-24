import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
//import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthenticationService, AlertService } from './_services';
import { AuthGuard } from './_guards';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatInputModule, MatTableModule, MatIconModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { ResumoDiarioModule } from './resumo-diario/resumo-diario.module';
import { MailComponent } from './mail/mail.component';


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
    MatDialogModule   
  ],
  declarations: [
    AppComponent,
    //AdminLayoutComponent
    LoginComponent,
    MailComponent
  ],
  //providers: [AuthService],
  providers: [AuthenticationService, AuthGuard, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
