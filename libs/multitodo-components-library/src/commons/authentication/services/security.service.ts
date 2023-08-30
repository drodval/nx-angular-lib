import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { filter } from 'rxjs/operators';
import { appConfig } from '../config/config';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root',
})
export class SecurityService {

  constructor(
    private oauthService: OAuthService) {
  }

  /**
   * Iniciar el flujo para el login. Se le puede pasar una función para que
   * haga determinadas cosas desde donde se llame
   * @param fnLoadProfile
   */
  init(fnLoadProfile: (user: User) => void) {
    const authConfig = {
      issuer: appConfig.serverUri,
      loginUrl: appConfig.serverUri + '/authorize',
      logoutUrl: appConfig.serverUri + '/external-logout',

      redirectUri: window.location.origin,
      clientId: appConfig.clientId,
      scope: 'openid',
      strictDiscoveryDocumentValidation: false,
      oidc: true,
      // silentRefreshRedirectUri: window.location.origin + '/silent_refresh.html',
      silentRefreshRedirectUri: window.location.origin,
      disableAtHashCheck: true,
      timeoutFactor: 0.5,
    };

    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.events
      .pipe(
        filter((e) => e.type === 'token_received'),
      )
      .subscribe();

    this.oauthService.events
      .pipe(filter((e) => e.type === 'token_expires'))
      .subscribe();

    this.oauthService.loadDiscoveryDocumentAndLogin().then(() => {
      this.oauthService.tryLogin().then(() => {
        if (!this.oauthService.hasValidAccessToken()) {
          this.oauthService.initImplicitFlow();
        } else {

          this.oauthService.loadUserProfile().then((user) => fnLoadProfile(user));
        }
      });
    });
  }

  logout(): void {
    this.oauthService.logOut();
    console.log('Se ha hecho logout');
  }

  // These normally won't be exposed from a service like this, but
  // for debugging it makes sense.
  public get accessToken() {
    return this.oauthService.getAccessToken();
  }

  public get refreshToken() {
    return this.oauthService.getRefreshToken();
  }

  public get identityClaims() {
    return this.oauthService.getIdentityClaims();
  }

  public get idToken() {
    return this.oauthService.getIdToken();
  }

  public get logoutUrl() {
    return this.oauthService.logoutUrl;
  }
}


