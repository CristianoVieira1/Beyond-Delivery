import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import {User} from 'src/types/Account';

const userStorageKey = '@delivery:login';
const locationStorageKey = '@delivery:onLocation';

class LocalStorage {
  //////////////user
  static async getUser(): Promise<any> {
    const userStorage = await SecureStore.getItemAsync(userStorageKey);
    return userStorage ? JSON.parse(userStorage) : null;
  }

  static async setUser(user: User) {
    await SecureStore.setItemAsync(userStorageKey, JSON.stringify(user));
  }

  static async clean(): Promise<unknown> {
    return await SecureStore.deleteItemAsync(userStorageKey);
  }

  ////location

  static async getLocation(): Promise<string | null> {
    const isLocationEnabled = await AsyncStorage.getItem(locationStorageKey);
    return isLocationEnabled ?? null;
  }

  static setLocation(locationToken: boolean): Promise<void> {
    return AsyncStorage.setItem(locationStorageKey, locationToken.toString());
  }

  static async cleanLocation(): Promise<unknown> {
    return await SecureStore.deleteItemAsync(locationStorageKey);
  }
}

export default LocalStorage;
