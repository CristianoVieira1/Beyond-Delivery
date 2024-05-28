import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialAccess from '@scenes/InitialAccess';
import SplashScreen from '@scenes/SplashScreen';
import {SignIn} from '@scenes/access/SignIn';
import React from 'react';

const Stack = createNativeStackNavigator();

export const PublicRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreenPage'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreenPage" component={SplashScreen} />
      <Stack.Screen name="InitialAccess" component={InitialAccess} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};
