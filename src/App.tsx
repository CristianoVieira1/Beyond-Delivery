import {
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_700Bold,
  useFonts,
} from '@expo-google-fonts/public-sans';

import Load from '@components/Animations/Load';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootSiblingParent} from 'react-native-root-siblings';
import Toast from 'react-native-toast-message';
import {ThemeProvider} from 'styled-components';
import {UserSessionProvider, useSession} from './context/Session';
import LocalStorage from './persistence/LocalStorage';
import Routes, {navigationRef} from './routes';
import theme from './theme';

function App() {
  const {removeSession, setSession} = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    removeSession();
  }, []);

  async function hasUserEmailLogged() {
    const userLogged = await LocalStorage.getUser();
    if (userLogged) {
      setIsAuthenticated(true);
      const response = {user: {...userLogged}};
      setSession(prevSession => ({
        ...prevSession,
        ...response,
      }));
    }
  }

  useEffect(() => {
    hasUserEmailLogged();
  }, [isAuthenticated]);

  const [fontsLoaded] = useFonts({
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Load />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <Routes />
      </NavigationContainer>
      <Toast />
    </ThemeProvider>
  );
}

const Main = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <RootSiblingParent>
      <UserSessionProvider>
        <App />
      </UserSessionProvider>
    </RootSiblingParent>
  </GestureHandlerRootView>
);

export default Main;
