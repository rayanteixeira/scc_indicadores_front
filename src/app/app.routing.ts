import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MailComponent } from './mail/mail.component';
import { ResumoDiarioComponent } from './resumo-diario/resumo-diario.component';
import { ResumoDoDiaComponent } from './resumo-diario/resumo-diario-lista/resumo-do-dia.component';
import { AuthGuard } from './_guards';

const routes: Routes =[

  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: 'resumo-do-dia', pathMatch: 'full'}, 
  { path: '', component: AdminLayoutComponent, // canActivate: [AuthGuard] ,
   children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
   
  // otherwise redirect to home
  // { path: '**', redirectTo: 'login' },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
