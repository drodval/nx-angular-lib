export interface Flow {
    id: number;
    flowName: string;
    logLevel: number;
    defaultLanguage: Language;
    languages: Language[];
    flowSteps: FlowStep[];
}

export interface Language {
    id: number;
    language: string;
    languageCode: string;
}

export interface FlowStep {
    id: number;
    microFrontName: string;
    bffEndpoint: string;
    mfeEndpoint: string;
    order: number;
    moduleName: string;
}
