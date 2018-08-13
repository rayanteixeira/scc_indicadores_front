import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ResumoDiarioComponent } from '../../_resumo-diario/resumo-diario.component';
import { ResumoDoDiaComponent } from '../../_resumo-diario/_resumo-diario-lista/resumo-do-dia.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'resumo-diario',  component: ResumoDiarioComponent },
    { path: 'resumo-do-dia',  component: ResumoDoDiaComponent },
];

