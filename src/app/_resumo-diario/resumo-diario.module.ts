import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumoDiarioService } from './resumo-diario.service';
import { MatProgressSpinnerModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule } from '@angular/material';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ResumoDiarioComponent } from './resumo-diario.component';
import { ResumoDoDiaComponent } from './_resumo-diario-lista/resumo-do-dia.component';



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
    CurrencyMaskModule
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
