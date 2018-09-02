import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardMesComponent } from './mes/dashboard-mes.component';
import { DashboardDiaComponent } from './dia/dashboard-dia.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule
  ],
  declarations: [DashboardComponent, DashboardMesComponent, DashboardDiaComponent
  ]
})
export class DashboardModule { }
