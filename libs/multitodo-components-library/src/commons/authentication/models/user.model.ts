export interface User {
  info?: UserInfo;
}

export interface UserInfo {
  sub?: string;
  nonce?: string;
  at_hash?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  email?: string;
  exp?: number;
  iat?: number;
  iss?: string;
  aud?: string;
  login?: string;
  roles?: string[];
  user_master_id?: string;
  access_token?: AccessToken;
}

export interface AccessToken {
  iat?: number;
  exp?: number;
}

