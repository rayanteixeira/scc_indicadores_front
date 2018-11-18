import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumoDiarioService } from './resumo-diario.service';
import { MatProgressSpinnerModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule } from '@angular/material';
import { ResumoDiarioComponent } from './resumo-diario.component';
import { ResumoDoDiaComponent } from './resumo-diario-lista/resumo-do-dia.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsRequestInterceptor } from '../_interceptor/http-interceptor';
import { BrMasker4Module } from 'brmasker4';
import {IMaskModule} from 'angular-imask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    BrMasker4Module,
    IMaskModule
  ],

  declarations: [
    ResumoDiarioComponent,
    ResumoDoDiaComponent,
  ],
  providers: [
   ResumoDiarioService
  ],
})
export class ResumoDiarioModule { }
