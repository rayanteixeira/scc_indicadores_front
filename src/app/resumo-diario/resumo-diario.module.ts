import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumoDiarioService } from './resumo-diario.service';
import { MatProgressSpinnerModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule } from '@angular/material';
import { ResumoDiarioComponent } from './resumo-diario.component';
import { ResumoDoDiaComponent } from './resumo-diario-lista/resumo-do-dia.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule
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
