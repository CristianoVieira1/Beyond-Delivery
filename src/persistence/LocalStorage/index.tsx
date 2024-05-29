import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import {User} from 'src/types/Account';

export interface Address {
  id: number;
  label: string;
  address: string;
  world: string;
  coordinate: {latitude: number; longitude: number};
  isSelected: boolean;
  onAction?: (id: number) => void;
  onViewOnMap?: () => void;
}

const userStorageKey = '@delivery:login';
const locationStorageKey = '@delivery:onLocation';
const addressStorageKey = '@delivery:addresses';

class LocalStorage {
  static async getUser(): Promise<User | null> {
    const userStorage = await SecureStore.getItemAsync(userStorageKey);
    return userStorage ? JSON.parse(userStorage) : null;
  }

  static async setUser(user: User) {
    await SecureStore.setItemAsync(userStorageKey, JSON.stringify(user));
  }

  static async cleanUser(): Promise<void> {
    await SecureStore.deleteItemAsync(userStorageKey);
  }

  static async getLocation(): Promise<string | null> {
    const isLocationEnabled = await AsyncStorage.getItem(locationStorageKey);
    return isLocationEnabled ?? null;
  }

  static setLocation(locationToken: boolean): Promise<void> {
    return AsyncStorage.setItem(locationStorageKey, locationToken.toString());
  }

  static async cleanLocation(): Promise<void> {
    await AsyncStorage.removeItem(locationStorageKey);
  }

  static async getAddresses(): Promise<Address[] | null> {
    const addressesStorage = await AsyncStorage.getItem(addressStorageKey);
    return addressesStorage ? JSON.parse(addressesStorage) : null;
  }

  static async setAddresses(addresses: Address[]): Promise<void> {
    await AsyncStorage.setItem(addressStorageKey, JSON.stringify(addresses));
  }

  static async cleanAddresses(): Promise<void> {
    await AsyncStorage.removeItem(addressStorageKey);
  }

  static async addAddress(
    label: string,
    world: string,
    addressDetails: string,
    isSelected: boolean,
  ): Promise<void> {
    const newAddress: Address = {
      id: Date.now(),
      label,
      address: addressDetails,
      world,
      coordinate: {latitude: 0, longitude: 0},
      isSelected,
    };

    const existingAddresses = await LocalStorage.getAddresses();
    const updatedAddresses = existingAddresses
      ? [...existingAddresses, newAddress]
      : [newAddress];

    await LocalStorage.setAddresses(updatedAddresses);
  }
}

export default LocalStorage;
