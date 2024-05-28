import {NavigationContainerRef} from '@react-navigation/native';
import React, {createRef, useEffect, useState} from 'react';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useSession} from '../context/Session';
import {ParamList} from '../types/routes';
import {PrivateRoutes} from './private.routes';
import {PublicRoutes} from './public.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamList {}
  }
}

export const navigationRef = createRef<NavigationContainerRef<ParamList>>();

const Routes = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const {session} = useSession();

  useEffect(() => {
    if (session?.autenticated) {
      const subscriber = auth().onAuthStateChanged(setUser);
      return subscriber;
    }
  }, [session]);

  return user ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
