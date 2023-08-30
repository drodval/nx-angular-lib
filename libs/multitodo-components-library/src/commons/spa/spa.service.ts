import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Flow } from '../../models/Flow.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericResponseModel } from '../../models/GenericResponse.model';
import { SecurityService } from '../authentication';

@Injectable({
    providedIn: 'root',
})
export class SpaService {
    constructor(private http: HttpClient, private securityService: SecurityService) {}

    // TODO: pendiente de cambiar cuando se monten los enviroments
    /**
     * Url base para llamar a servicio que obtiene la configuración de la spa
     * @private
     */
    private url = 'https://108.143.14.154/flows/api/v1';

    /**
     * Almacenará la información de la SPA si ya se ha llamado al servicio
     * @type {Flow | null}
     */
    private spa: Flow | null = null;

    /**
     * Obtener información sobre la estructura de la SPA y los microfrontends que contiene
     * @returns {Observable<Flow | undefined>}
     */
    get(): Observable<Flow> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.securityService.accessToken}`,
        });

        return this.spa
            ? of(this.spa)
            : this.http.get<GenericResponseModel<Flow>>(`${this.url}/Flows/2`, { headers }).pipe(
                  map((flow) => flow.data[0] ?? {}),
                  tap((flow) => (this.spa = flow))
              );
    }
}
