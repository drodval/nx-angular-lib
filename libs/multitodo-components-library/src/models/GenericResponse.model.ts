export interface GenericResponseModel<T> {
    data: T[];
    error?: GenericError;
}

export interface GenericError {
    code: string;
    message: string;
}
