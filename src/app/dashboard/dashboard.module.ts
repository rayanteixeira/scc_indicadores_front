import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DshDiarioComponent } from './dsh-diario/dsh-diario.component';
import { CocosComponent } from './dsh-diario/sococo/cocos/cocos.component';
import { CriFlococoComponent } from './dsh-diario/sococo/cri-flococo/cri-flococo.component';
import { OleosComponent } from './dsh-diario/sococo/oleos/oleos.component';
import { TortasComponent } from './dsh-diario/sococo/tortas/tortas.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DshDiarioComponent, CocosComponent, CriFlococoComponent, OleosComponent, TortasComponent]
})
export class DashboardModule { }
