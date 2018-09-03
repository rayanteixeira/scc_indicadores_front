import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardAnoComponent } from './ano/dashboard-ano.component';
import { DashboardMesComponent } from './mes/dashboard-mes.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [DashboardComponent, DashboardMesComponent, DashboardAnoComponent
  ]
})
export class DashboardModule { }
