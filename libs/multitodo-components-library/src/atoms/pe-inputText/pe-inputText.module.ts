import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeInputTextComponent } from './pe-inputText.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule
  ],
  declarations: [PeInputTextComponent],
  exports: [PeInputTextComponent]
})
export class PeInputTextModule { }
