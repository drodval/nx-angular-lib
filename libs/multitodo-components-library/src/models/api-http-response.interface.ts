export interface ApiHttpResponse {
    data: any;
    records: number;
    page: number;
    error?: {
        code: number;
        message: string;
    }
}