import AddressCard, {Address} from '@components/AddressCard';
import AddressModal from '@components/DeliveryInfoModal';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LocalStorage from '../../../persistence/LocalStorage';
import * as S from './styles';

const initialAddresses: Address[] = [];

const Home: React.FC = () => {
  const navigation = useNavigation();
  const scrollRef = useRef<ScrollView>(null);
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const loadAddresses = async () => {
    try {
      const storedAddresses = await LocalStorage.getAddresses();
      if (storedAddresses) {
        setAddresses(storedAddresses);
      }
    } catch (error) {
      console.error('Falha ao carregar endereços:', error);
    }
  };

  useEffect(() => {
    loadAddresses();
  }, []);

  const saveAddresses = async (newAddresses: Address[]) => {
    try {
      await LocalStorage.setAddresses(newAddresses);
      setAddresses(newAddresses);
    } catch (error) {
      console.error('Falha ao salvar endereços:', error);
    }
  };

  const toggleSelectAddress = (id: number) => {
    const newAddresses = addresses.map(address =>
      address.id === id
        ? {...address, isSelected: !address.isSelected}
        : address,
    );
    saveAddresses(newAddresses);
  };

  const deleteSelectedAddresses = () => {
    const selectedAddresses = addresses.filter(address => address.isSelected);
    if (selectedAddresses.length === 0) {
      Alert.alert('Atenção', 'Selecione um ou mais endereços para excluir.');
    } else {
      const newAddresses = addresses.filter(address => !address.isSelected);
      saveAddresses(newAddresses);
    }
  };

  const handleViewOnMap = (address: Address) => {
    if (address.label.toLowerCase() === 'marte') {
      Alert.alert('Map View', 'Marte ainda está sendo mapeada.');
    } else {
      navigation.navigate('MapScreen', {address});
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackButton />
        <S.Title>Entregas</S.Title>
        <S.MoreButton onPress={deleteSelectedAddresses}>
          <Icon name="delete" size={24} color="#000" />
        </S.MoreButton>
      </S.Header>
      <S.AddButton onPress={() => setIsModalVisible(true)}>
        <S.AddButtonText>Adicionar nova entrega</S.AddButtonText>
      </S.AddButton>

      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {addresses.map(address => (
          <AddressCard
            key={address.id}
            {...address}
            onAction={toggleSelectAddress}
            onViewOnMap={() => handleViewOnMap(address)}
          />
        ))}
      </ScrollView>

      <AddressModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSave={(newAddresses: Address[]) =>
          setAddresses(prevAddresses => [...prevAddresses, ...newAddresses])
        }
      />
    </S.Container>
  );
};

export default Home;
