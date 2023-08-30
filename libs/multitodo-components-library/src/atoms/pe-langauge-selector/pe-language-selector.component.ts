import { Component, EventEmitter, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DropdownItems } from '../../models/dropdown.items';
import { TranslationService } from '../../commons/translation/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { DropdownChangeEvent } from 'primeng/dropdown';

@Component({
    selector: 'pe-language-selector',
    templateUrl: './pe-language-selector.component.html',
    styleUrls: ['./pe-language-selector.component.scss'],
})
export class PeLanguageSelectorComponent {
    constructor(private translationService: TranslationService, private tranlateService: TranslateService) {}

    /**
     * Emitirá hacia fuera el evento con el lenguaje seleccionado
     */
    @Output() changeLanguage = new EventEmitter<DropdownChangeEvent>();

    options$: Observable<DropdownItems[]> = this.translationService.getLanguages().pipe(
        map((langs) => {
            return langs.map((lang) => ({ name: lang.language, code: lang.languageCode }));
        })
    );

    change(event: DropdownChangeEvent) {
        this.tranlateService.use(event.value?.code);
    }
}
