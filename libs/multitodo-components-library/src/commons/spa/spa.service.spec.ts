import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SpaService } from './spa.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { shellMock } from '../../mocks/spa-service.mocks';
import { SecurityService } from '../authentication';

const securityServiceMock = {
    accessToken: jest.fn(() => 'abcd'),
};

describe('SpaService', () => {
    let service: SpaService;
    let httpTestingController: HttpTestingController;
    let securityService: SecurityService;
    const url = 'https://108.143.14.154/flows/api/v1/Flows/2';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                SpaService,
                {
                    provide: SecurityService,
                    useValue: securityServiceMock,
                },
            ],
        });
        service = TestBed.inject(SpaService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('method is GET', () => {
        service.get().subscribe();

        const testRequest = httpTestingController.expectOne(url);
        testRequest.flush({});
        expect(testRequest.request.method).toBe('GET');
    });

    it('response 200', fakeAsync(() => {
        service.get().subscribe((result) => expect(result).toEqual(shellMock.data[0]));

        const testRequest = httpTestingController.expectOne(url);
        testRequest.flush(shellMock);
        tick(50);
    }));
});
