import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardMesComponent } from './mes/dashboard-mes.component';
import { DashboardDiaComponent } from './dia/dashboard-dia.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, DashboardMesComponent, DashboardDiaComponent
  ]
})
export class DashboardModule { }
