// import { LocationObject } from "expo-location";
import {User} from './Account';

export interface Session {
  user: User;
  autenticated: boolean;
  // currentPosition: LocationObject | null;
}
