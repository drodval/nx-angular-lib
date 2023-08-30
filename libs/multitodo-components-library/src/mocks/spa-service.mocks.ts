import { GenericResponseModel } from '../models/GenericResponse.model';
import { Flow } from '../models/Flow.model';

export const shellMock: GenericResponseModel<Flow> = {
    data: [
        {
            id: 1,
            flowName: 'matricula',
            logLevel: 3,
            defaultLanguage: {
                id: 5,
                language: 'Spanish (Spain)',
                languageCode: 'es_ES',
            },
            languages: [
                {
                    id: 8,
                    language: 'Spanish (Mexico)',
                    languageCode: 'es_MX',
                },
                {
                    id: 9,
                    language: 'Klingon',
                    languageCode: 'tlh',
                },
                {
                    id: 10,
                    language: 'Navajo',
                    languageCode: 'nv',
                },
            ],
            flowSteps: [
                {
                    id: 3,
                    microFrontName: 'mfe-base',
                    bffEndpoint: 'https://localhost:7072',
                    mfeEndpoint: 'http://localhost:4201',
                    order: 0,
                    moduleName: 'RemoteEntryModule',
                },
            ],
        },
    ],
};
