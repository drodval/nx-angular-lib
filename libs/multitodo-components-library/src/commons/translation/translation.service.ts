import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SpaService } from '../spa/spa.service';
import { Language } from '../../models/Flow.model';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TranslationService {
    constructor(private http: HttpClient, private spa: SpaService) {}

    /**
     * se setea como lenguaje por defecto el Español.
     * @type {Language}
     */
    private defaultLanguage: Language = {
        id: 5,
        language: 'Spanish (Spain)',
        languageCode: 'es_ES',
    };

    /**
     * Carga los json de la biblioteca
     * @returns {TranslateHttpLoader}
     */
    init(): TranslateHttpLoader {
        return new TranslateHttpLoader(this.http);
    }

    /**
     * Devolverá los lenguajes disponibles para la aplicación
     * @returns {Observable<Language[]>}
     */
    getLanguages(): Observable<Language[]> {
        return this.spa.get().pipe(map((flow) => [flow.defaultLanguage, ...flow.languages]));
    }
}
