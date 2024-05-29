import axios from 'axios';
import {useState} from 'react';
import {Alert} from 'react-native';
import LocalStorage from '../../../persistence/LocalStorage';
import {Address} from '../../AddressCard';

interface AddressModalProps {
  onClose: () => void;
  onSave: (
    collectionAddress: Omit<Address, 'onAction' | 'onViewOnMap'>,
    deliveryAddress: Omit<Address, 'onAction' | 'onViewOnMap'>,
  ) => void;
}

const useDeliveryInfoViewModel = ({onClose, onSave}: AddressModalProps) => {
  // State para dados de coleta
  const [collectionCep, setCollectionCep] = useState('');
  const [collectionAddress, setCollectionAddress] = useState('');
  const [collectionState, setCollectionState] = useState('');
  const [collectionCity, setCollectionCity] = useState('');
  const [collectionNeighborhood, setCollectionNeighborhood] = useState('');
  const [collectionNumber, setCollectionNumber] = useState('');
  const [collectionLandmark, setCollectionLandmark] = useState('');

  // State para dados de entrega
  const [deliveryCep, setDeliveryCep] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryState, setDeliveryState] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('');
  const [deliveryNeighborhood, setDeliveryNeighborhood] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [deliveryLandmark, setDeliveryLandmark] = useState('');

  const handleSave = async () => {
    console.log('collectionAddress', collectionAddress);
    const newCollectionAddress: Omit<Address, 'onAction' | 'onViewOnMap'> = {
      id: Date.now(),
      label: 'Coleta',
      address: `${collectionAddress}, ${collectionNumber}, ${collectionNeighborhood}, ${collectionCity} - ${collectionState}`,
      phone: '',
      coordinate: {latitude: 0, longitude: 0},
      isSelected: false,
    };

    const newDeliveryAddress: Omit<Address, 'onAction' | 'onViewOnMap'> = {
      id: Date.now() + 1,
      label: 'Entrega',
      address: `${deliveryAddress}, ${deliveryNumber}, ${deliveryNeighborhood}, ${deliveryCity} - ${deliveryState}`,
      phone: '',
      coordinate: {latitude: 0, longitude: 0},
      isSelected: false,
    };

    try {
      console.log('newCollectionAddress', newCollectionAddress);
      await LocalStorage.setAddresses([
        newCollectionAddress,
        newDeliveryAddress,
      ]);

      onSave(newCollectionAddress, newDeliveryAddress);
      onClose();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os endereços.');
      console.error('Erro ao salvar endereços:', error);
    }
  };

  const fetchAddress = async (cep: string, type: 'collection' | 'delivery') => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      if (data.erro) {
        Alert.alert('Erro', 'CEP não encontrado');
      } else {
        if (type === 'collection') {
          setCollectionAddress(data.logradouro);
          setCollectionState(data.uf);
          setCollectionCity(data.localidade);
          setCollectionNeighborhood(data.bairro);
        } else {
          setDeliveryAddress(data.logradouro);
          setDeliveryState(data.uf);
          setDeliveryCity(data.localidade);
          setDeliveryNeighborhood(data.bairro);
        }
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao buscar endereço');
    }
  };

  const viewModel = {
    handleSave,
    collectionCep,
    setCollectionCep,
    collectionAddress,
    setCollectionAddress,
    collectionState,
    setCollectionState,
    collectionCity,
    setCollectionCity,
    collectionNeighborhood,
    setCollectionNeighborhood,
    collectionNumber,
    setCollectionNumber,
    collectionLandmark,
    setCollectionLandmark,
    fetchAddress,
    deliveryCep,
    setDeliveryCep,
    deliveryAddress,
    setDeliveryAddress,
    deliveryState,
    setDeliveryState,
    deliveryCity,
    setDeliveryCity,
    deliveryNeighborhood,
    setDeliveryNeighborhood,
    deliveryNumber,
    setDeliveryNumber,
    deliveryLandmark,
    setDeliveryLandmark,
  };

  return viewModel;
};

export default useDeliveryInfoViewModel;
