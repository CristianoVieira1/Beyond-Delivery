import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@scenes/account/Home';
import MapScreen from '@scenes/account/MapScreen';

const Stack = createNativeStackNavigator();

export const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
};
