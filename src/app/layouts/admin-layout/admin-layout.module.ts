import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { DashboardService } from '../../dashboard/dashboard.service';
import { ResumoDiarioComponent } from '../../_resumo-diario/resumo-diario.component';
import { ResumoDiarioService } from '../../_resumo-diario/resumo-diario.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { DashboardMesComponent } from '../../dashboard/mes/dashboard-mes.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AmChartsModule
  ],
  declarations: [
    DashboardComponent,
    DashboardMesComponent,
    UserProfileComponent,
    ResumoDiarioComponent
  ],
  providers: [DashboardService, ResumoDiarioService]

})

export class AdminLayoutModule {}
