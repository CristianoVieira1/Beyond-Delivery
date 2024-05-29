import {User} from './Account';

export interface Session {
  user: User;
  autenticated: boolean;
}
