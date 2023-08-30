import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  /**
   * Información del usuario
   * @type {User | null}
   * @private
   */
  private _user: User | null = null;

  /**
   * Access Token que se usa para la autenticación
   * @type {string | null}
   * @private
   */
  private _accessToken: string | null = null;

  get user(): User | null {
    return this._user;
  }

  set user(user: User) {
    this._user = user;
  }

  get accessToken(): string | null {
    return this._accessToken;
  }

  set accessToken(accessToken: string | null) {
    this._accessToken = accessToken;
  }
}
