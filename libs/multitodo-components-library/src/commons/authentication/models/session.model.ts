import { UserInfo } from 'angular-oauth2-oidc';

export class Session {
  isAuthenticated: boolean;
  public user: UserInfo | null;

  static Anonymous(): Session {
    return new Session(null);
  }

  constructor(user: UserInfo | null) {
    this.user = user;
    this.isAuthenticated = !!user && !!user['access_token'];
  }

  getFullName(): string | null {
    return this.user ? this.user['name'] || null : null;
  }
  getEmail(): string | null {
    return this.user ? this.user['email'] || null : null;
  }
  getScopes(): string[] {
    return this.user && this.user['oidc'] && this.user['oidc'].scopes
      ? this.user['oidc'].scopes
      : [];
  }

  getRoles(): string[] {
    const baseRoles = this.user ? this.user['roles'] : [];
    return baseRoles;
  }
  hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }
  getAccessToken(): string | null {
    return this.user && this.user['accessToken']
      ? this.user['accessToken']
      : null;
  }
}
