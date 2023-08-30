import { Observable, catchError, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { LogLevel } from '../../enums/log-level.enum';
import { ApiCommunicationsService } from '../communication/api-communication.service';
import { ApiHttpResponse } from '../../models/api-http-response.interface';

/**
 * El componente de Registro (LoggerComponent) es una herramienta esencial para el desarrollo y mantenimiento de aplicaciones. Permite registrar información relevante en diferentes niveles de log para facilitar la identificación y resolución de problemas.
 * 
 * El componente es un singleton que será utilizado por los distintos componentes o en la aplicación que se comunica con el BE para persistir las trazas en el sistema de gestión final.
 * 
 * <b>Niveles de Log</b><br>
 * El Componente de Registro de Angular tiene cinco niveles de log:
 * <ul>
 * <li>DEBUG: Utilizado para mensajes de depuración y detalles técnicos.</li>
 * <li>INFO: Utilizado para mensajes informativos sobre el funcionamiento de la aplicación.</li>
 * <li>WARN: Utilizado para mensajes que indican posibles problemas o situaciones no deseadas.</li>
 * <li>ERROR: Utilizado para mensajes que indican errores en la aplicación, pero que no impiden su funcionamiento.</li>
 * <li>FATAL: Utilizado para mensajes que indican errores críticos que impiden el funcionamiento normal de la aplicación.</li>
 * </ul>
 * 
 * Los endpoints para obtener el nivel de log de la app y el envío de trazas son:
 *   - /api/v1/logger?appId=idApp
 *   - /api/v1/logger envío traza  
 */
@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  errorMessage = '';

  private httpClient: ApiCommunicationsService;
  private minLogLevel: LogLevel = LogLevel.DEBUG;

  private endpoint_loggerConfig = 'logger/level/';
  private endpoint_log = 'logger';

  constructor(httpClient: ApiCommunicationsService) {
    this.httpClient = httpClient;
    this.getLogLevel('1');
  }

  /**
   * convierte un string a LogLevel válido
   * 
   * @param logLevelStr 
   * @returns 
   */
  getLogLevelFromString(logLevelStr: string): LogLevel {
    try {
      return LogLevel[logLevelStr as keyof typeof LogLevel];
    } catch(err) {
      this.log(logLevelStr+' no es un nivel de log válido', LogLevel.ERROR)
      return LogLevel.DEBUG;
    }
  }

  /**
   * asignar el nivel de log establcido en BE para enviar trazas a bff
   */
  getLogLevel(appId: string): void {
    this.httpClient.get(this.endpoint_loggerConfig+appId).subscribe(
      (logLevel: ApiHttpResponse) => {
        this.minLogLevel = this.getLogLevelFromString(logLevel.data);
      })
  }

  /**
   * Mandará un mensaje hacia el servicio de logs
   * @param message
   * @param level
   */
  log(message: string, level = LogLevel.DEBUG): void {
    const constructMessage = () =>  `[${new Date}] ${level}: ${message}`;
    const body = {"logMessage": constructMessage(), "logLvel": level}

    //TODO: quitar este console.log
    console.log({body});

    // TODO: handle minLogLevel in order to send logs to bff
    if (LogLevel[this.minLogLevel] >= LogLevel[level]) {
      this.httpClient.post(this.endpoint_log, body).subscribe(
        (data) => {console.log(data);},
        (error) => {this.errorMessage = error;}
      );
        
    }
  }
}
