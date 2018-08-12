import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MAT_LABEL_GLOBAL_OPTIONS,
  MatTableModule,
} from '@angular/material';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { DashboardService } from '../../dashboard/dashboard.service';
import { ResumoDiarioComponent } from '../../_resumo-diario/resumo-diario.component';
import { ResumoDiarioService } from '../../_resumo-diario/resumo-diario.service';
import { ResumoDoDiaComponent } from '../../_resumo-diario/_resumo-diario-lista/resumo-do-dia.component';



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
    AmChartsModule,
    MatFormFieldModule,
    MatTableModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    ResumoDiarioComponent,
    ResumoDoDiaComponent
  ],
  providers: [DashboardService, ResumoDiarioService, {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}]

})

export class AdminLayoutModule {}
