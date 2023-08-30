import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeLanguageSelectorComponent } from './pe-language-selector.component';
import { PeDropdownModule } from '@unir';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    declarations: [PeLanguageSelectorComponent],
    imports: [CommonModule, PeDropdownModule, ProgressSpinnerModule, DropdownModule],
    exports: [PeLanguageSelectorComponent],
})
export class PeLanguageSelectorModule {}
