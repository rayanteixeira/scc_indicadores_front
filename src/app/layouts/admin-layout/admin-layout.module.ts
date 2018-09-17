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
import { LoginComponent } from '../../login/login.component';
import { ResumoDiarioModule } from '../../_resumo-diario/resumo-diario.module';


@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    ResumoDiarioModule,
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
    LoginComponent
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
  entryComponents: [MailRemoveDialogComponent]

})

export class AdminLayoutModule {}
