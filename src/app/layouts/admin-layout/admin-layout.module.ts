import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { MailComponent, MailRemoveDialogComponent } from '../../mail/mail.component';

import {
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatDialogModule,
  MAT_DATE_LOCALE
} from '@angular/material';

import { DashboardModule } from '../../dashboard/dashboard.module';
import { ResumoDiarioModule } from '../../resumo-diario/resumo-diario.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    ResumoDiarioModule,
    ComponentsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: [
    MailComponent,
    MailRemoveDialogComponent,
    AdminLayoutComponent
    // LoginComponent
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
  entryComponents: [MailRemoveDialogComponent]

})

export class AdminLayoutModule {}
