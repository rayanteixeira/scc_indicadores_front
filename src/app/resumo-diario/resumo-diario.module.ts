import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumoDiarioService } from './resumo-diario.service';
import { MatProgressSpinnerModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule } from '@angular/material';
import { ResumoDiarioComponent } from './resumo-diario.component';
import { ResumoDoDiaComponent } from './resumo-diario-lista/resumo-do-dia.component';
import { NumberConverterFormatPipe } from 'app/components/pipes/numberConvertFormat.pipe';
import { NumberConverterFormat2Pipe } from 'app/components/pipes/numberConvertFormat2.pipe';

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
    CurrencyMaskModule,
  ],
  declarations: [
    ResumoDiarioComponent,
    ResumoDoDiaComponent,
    NumberConverterFormatPipe,
    NumberConverterFormat2Pipe
  ],
  exports: [NumberConverterFormatPipe],
  providers: [
    ResumoDiarioService
  ],
})
export class ResumoDiarioModule { }
