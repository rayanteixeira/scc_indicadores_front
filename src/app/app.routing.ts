import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MailComponent } from './mail/mail.component';
import { ResumoDiarioComponent } from './resumo-diario/resumo-diario.component';
import { ResumoDoDiaComponent } from './resumo-diario/resumo-diario-lista/resumo-do-dia.component';
import { AuthGuard } from './_guards';

const routes: Routes =[
  //{ path: '',               component: LoginComponent, canActivate: [AuthGuard]},  
  { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'mail',           component: MailComponent, canActivate: [AuthGuard] },
  { path: 'resumo-diario',  component: ResumoDiarioComponent },
  { path: 'resumo-do-dia',  component: ResumoDoDiaComponent },
  { path: 'login',          component: LoginComponent },
 
  // otherwise redirect to home
  { path: '**', redirectTo: 'login' },

  /*
  { path: '', redirectTo: 'login', pathMatch: 'full' }
  , {
     path: '',
     component: AdminLayoutComponent,
     children: [
         {
       path: '',
       loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
   }]}*/
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
