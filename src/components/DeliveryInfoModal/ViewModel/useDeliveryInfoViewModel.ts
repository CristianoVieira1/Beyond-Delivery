import axios from 'axios';
import {useState} from 'react';
import {Alert} from 'react-native';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import LocalStorage from '../../../persistence/LocalStorage';
import {Address} from '../../AddressCard';

interface AddressModalProps {
  onClose: () => void;
}

const useDeliveryInfoViewModel = ({
  onClose,
  onSave,
}: AddressModalProps & {onSave: (addresses: Address[]) => void}) => {
  const [deliveryCep, setDeliveryCep] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('');
  const [collectionCep, setCollectionCep] = useState('');
  const [deliveryWord, setDeliveryWord] = useState('');
  const [deliveryState, setDeliveryState] = useState('');
  const [collectionCity, setCollectionCity] = useState('');
  const [collectionWord, setCollectionWord] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [collectionState, setCollectionState] = useState('');
  const [deliveryLandmark, setDeliveryLandmark] = useState('');
  const [collectionNumber, setCollectionNumber] = useState('');
  const [collectionLandmark, setCollectionLandmark] = useState('');
  const [collectionAddress, setCollectionAddress] = useState('');
  const [deliveryNeighborhood, setDeliveryNeighborhood] = useState('');
  const [collectionNeighborhood, setCollectionNeighborhood] = useState('');

  const marteLots = [
    {id: '5521', label: 'Lote 5521'},
    {id: '5522', label: 'Lote 5522'},
    {id: '5523', label: 'Lote 5523'},
    {id: '5524', label: 'Lote 5524'},
  ];

  const clean = () => {
    setCollectionCep('');
    setCollectionAddress('');
    setCollectionState('');
    setCollectionCity('');
    setCollectionNeighborhood('');
    setCollectionNumber('');
    setCollectionLandmark('');
    setDeliveryCep('');
    setDeliveryAddress('');
    setDeliveryState('');
    setDeliveryCity('');
    setDeliveryNeighborhood('');
    setDeliveryNumber('');
    setDeliveryLandmark('');
  };

  const getCoordinates = async (address: string) => {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address,
      )}&key=`,
    );
    const data = response.data;

    if (data.status === 'OK' && data.results.length > 0) {
      const location = data.results[0].geometry.location;
      return {
        latitude: location.lat,
        longitude: location.lng,
      };
    } else {
      throw new Error('Erro ao buscar coordenadas');
    }
  };

  const handleSave = async () => {
    try {
      const fullCollectionAddress = `${collectionAddress}, ${collectionNumber}, ${collectionNeighborhood}, ${collectionCity} - ${collectionState}`;
      const fullDeliveryAddress = `${deliveryAddress}, ${deliveryNumber}, ${deliveryNeighborhood}, ${deliveryCity} - ${deliveryState}`;

      const collectionCoordinates = await getCoordinates(fullCollectionAddress);
      const deliveryCoordinates = await getCoordinates(fullDeliveryAddress);

      const newCollectionAddress: Omit<Address, 'onAction' | 'onViewOnMap'> = {
        id: Date.now(),
        label: 'Coleta',
        address: fullCollectionAddress,
        coordinate: collectionCoordinates,
        isSelected: false,
        world: collectionWord,
      };

      const newDeliveryAddress: Omit<Address, 'onAction' | 'onViewOnMap'> = {
        id: Date.now() + 1,
        label: 'Entrega',
        address: fullDeliveryAddress,
        coordinate: deliveryCoordinates,
        isSelected: false,
        world: deliveryWord,
      };

      await LocalStorage.setAddresses([
        newCollectionAddress,
        newDeliveryAddress,
      ]);

      onSave([newCollectionAddress, newDeliveryAddress]);

      Toast.show({
        topOffset: 70,
        autoHide: true,
        type: 'success',
        position: 'top',
        bottomOffset: 40,
        visibilityTime: 5000,
        text1: 'Endereços salvos',
      });

      onClose();
      clean();
    } catch (error) {
      Toast.show({
        topOffset: 70,
        autoHide: true,
        type: 'error',
        position: 'top',
        bottomOffset: 40,
        visibilityTime: 5000,
        text1: 'Não foi possível salvar os endereços',
      });
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

  const isSubmitButtonAvailable = (): boolean => {
    return deliveryCep !== '' && collectionCep !== '';
  };

  const viewModel = {
    marteLots,
    handleSave,
    fetchAddress,
    deliveryCep,
    deliveryCity,
    deliveryState,
    collectionCep,
    collectionCity,
    setDeliveryCep,
    deliveryNumber,
    deliveryAddress,
    collectionState,
    setDeliveryCity,
    setDeliveryWord,
    setCollectionCep,
    deliveryLandmark,
    collectionNumber,
    setCollectionWord,
    setDeliveryState,
    collectionAddress,
    setCollectionCity,
    setDeliveryNumber,
    setCollectionState,
    collectionLandmark,
    setDeliveryAddress,
    setCollectionNumber,
    setDeliveryLandmark,
    setCollectionAddress,
    deliveryNeighborhood,
    setCollectionLandmark,
    collectionNeighborhood,
    setDeliveryNeighborhood,
    setCollectionNeighborhood,
    isSubmitButtonAvailable: isSubmitButtonAvailable(),
  };

  return viewModel;
};

export default useDeliveryInfoViewModel;
