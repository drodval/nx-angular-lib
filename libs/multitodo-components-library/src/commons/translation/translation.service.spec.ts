import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { shellMock } from '../../mocks/spa-service.mocks';
import { SpaService } from '../spa/spa.service';
import { TranslationService } from './translation.service';
import { Flow, Language } from '../../models/Flow.model';
import { of } from 'rxjs';

const spaServiceMock = {
    get: jest.fn(() => of(shellMock.data[0])),
};

describe('SpaService', () => {
    let service: TranslationService;
    let initspy: any;
    let httpTestingController: HttpTestingController;
    let spaService: SpaService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                TranslationService,
                {
                    provide: SpaService,
                    useValue: spaServiceMock,
                },
            ],
        });
        service = TestBed.inject(TranslationService);
        spaService = TestBed.inject(SpaService);
        initspy = jest.spyOn(service, 'init');
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('init calls to TranslateHttpLoader', () => {
        service.init();
        expect(initspy).toHaveBeenCalled();
    });

    it('getLanguages with response 200', fakeAsync(() => {
        const flow: Flow = shellMock.data[0];
        const languagesResult: Language[] = [flow.defaultLanguage, ...flow.languages];

        service.getLanguages().subscribe((result) => expect(result).toEqual(languagesResult));
        tick(50);
    }));
});
