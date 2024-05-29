import {RouteProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Address} from '../../../components/AddressCard';
import * as S from './styles';

interface IProps {
  route: RouteProp<{params: {address: Address}}, 'params'>;
}

const MapScreen = (props: IProps) => {
  const navigation = useNavigation();

  const {address} = props.route.params;

  return (
    <S.Container>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: address.coordinate.latitude,
          longitude: address.coordinate.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker coordinate={address.coordinate}>
          <Icon name="location-pin" size={40} color="red" />
        </Marker>
      </MapView>
      <S.InfoContainer>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{address.label}</Text>
        <Text>{address.address}</Text>
        <Text>{address.phone}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: 'blue', marginTop: 10}}>Voltar</Text>
        </TouchableOpacity>
      </S.InfoContainer>
    </S.Container>
  );
};

export default MapScreen;
