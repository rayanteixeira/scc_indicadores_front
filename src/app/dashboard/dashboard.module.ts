import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardAnoComponent } from './ano/dashboard-ano.component';
import { DashboardMesComponent } from './mes/dashboard-mes.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from './dashboard.service';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsRequestInterceptor } from '../_interceptor/http-interceptor';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //DashboardRoutingModule,
    AmChartsModule,
    MatButtonModule,
    MatSelectModule,
 
  ],

  declarations: [
    DashboardComponent, 
    DashboardMesComponent, 
    DashboardAnoComponent,
    
  ],
  providers: [
    DashboardService
    
  ],
})
export class DashboardModule { }
