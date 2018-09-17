import { Routes } from '@angular/router';

import { MailComponent } from '../../mail/mail.component';
import { ResumoDiarioComponent } from '../../_resumo-diario/resumo-diario.component';
import { ResumoDoDiaComponent } from '../../_resumo-diario/_resumo-diario-lista/resumo-do-dia.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { LoginComponent } from '../../login/login.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'mail',           component: MailComponent },
    { path: 'resumo-diario',  component: ResumoDiarioComponent },
    { path: 'resumo-do-dia',  component: ResumoDoDiaComponent },
    { path: 'login',          component: LoginComponent },
];

