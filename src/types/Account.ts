export interface IUser {
  additionalUserInfo: AdditionalUserInfo;
  user: User;
}

export interface AdditionalUserInfo {
  isNewUser: boolean;
}

export interface User {
  displayName: null;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: string[];
  multiFactor: string[];
  phoneNumber: null;
  photoURL: null;
  providerData: string[];
  providerId: string;
  tenantId: null;
  uid: string;
}
