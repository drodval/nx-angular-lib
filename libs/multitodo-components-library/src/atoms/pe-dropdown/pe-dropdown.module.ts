import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeDropdownComponent } from './pe-dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PeDropdownComponent],
  imports: [CommonModule, DropdownModule, FormsModule],
  exports: [PeDropdownComponent]
})
export class PeDropdownModule {}
