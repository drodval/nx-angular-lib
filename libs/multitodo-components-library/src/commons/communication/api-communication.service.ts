import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiHttpResponse } from '../../models/api-http-response.interface';
import { Observable, catchError, map, of, throwError } from 'rxjs';

/**
 * Servicio para la gestión de la comunicación con los bff de la arquitectura multitodo
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class ApiCommunicationsService {

  private url = 'https://108.143.14.154/api/v1/';

  // TODO: this token must be setted when we have the login done - ASK user for login to BE guys
  private accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYWU0ZWNhMy04MjFjLTRiNGUtYmZiMS00OTJkNTVlNzJhMjAiLCJlbWFpbCI6ImFsZWphbmRyby5oZXJuYW5kZXpAZ2Z0LmNvbSIsImV4cCI6MTY5MTQwMzYwMSwiaXNzIjoiZGVtb2FwcHNlcnZpY2VzLmNsaWVudCIsImF1ZCI6ImRlbW9hcHBzZXJ2aWNlcy5jbGllbnQifQ.ehwU4-L-F3eLDXlwYnmEwARNx8pSIXIiqhyWJRQ5HSs";

  constructor(private http: HttpClient) {}

  handleReponse(response: HttpResponse<any>): ApiHttpResponse {
    if (response.status == 200) {
      return response.body as ApiHttpResponse;
    } else {
      // TODO: handle errors 
      return response.body as ApiHttpResponse;
    }
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    // TODO: definir como propagar este error para la gestión de errores global de la arquitectura FE

    // Rethrow the error to propagate it to the component or other parts of the app
    return throwError('Something went wrong. Please try again later.');
  }

  // TODO: añadir la securización que se defina 
  get(endpoint: string): Observable<ApiHttpResponse> {
    const headers = new HttpHeaders({
                                      'Authorization': `Bearer ${this.accessToken}`
                                    });
    return this.http.get<any>(this.url+endpoint, {headers: headers}).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }
  
  // TODO: añadir la securización que se defina 
  post(endpoint: string, data: any): Observable<ApiHttpResponse> {
    const headers = new HttpHeaders()
                      .set('Authorization', `Bearer ${this.accessToken}`)
                      .set('Content-Type', 'application/json');                           

    return this.http.post<ApiHttpResponse>(this.url+endpoint, data, {headers: headers}).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  // Add other HTTP methods as needed
}