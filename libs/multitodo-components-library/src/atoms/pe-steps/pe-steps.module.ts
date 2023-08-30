import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeStepsComponent } from './pe-steps.component';
import { StepsModule } from 'primeng/steps';


@NgModule({
  declarations: [PeStepsComponent],
  imports: [
    CommonModule,
    StepsModule
  ],
  exports: [PeStepsComponent]
})
export class PeStepsModule { }
