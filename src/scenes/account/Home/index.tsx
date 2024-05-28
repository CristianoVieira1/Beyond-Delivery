import AddressCard, {Address} from '@components/AddressCard';
import Button from '@components/Button';
import 'moment/locale/pt-br';
import {useRef, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';
import {useViewModel} from './viewModel';

const initialAddresses: Address[] = [
  {
    id: 1,
    label: 'Home',
    address:
      'W3-092, 9th Floor, Wellington Estate, Near DLF Phase 5 Club, Opposite ...',
    phone: '+91 955 523 8994',
    isSelected: false,
    onAction: () => {},
  },
  {
    id: 2,
    label: 'Office',
    address:
      'W3-092, 9th Floor, Wellington Estate, Near DLF Phase 5 Club, Opposite ...',
    phone: '+91 955 523 8994',
    isSelected: false,
    onAction: () => {},
  },
  {
    id: 3,
    label: "Sunny's House",
    address:
      'W3-092, 9th Floor, Wellington Estate, Near DLF Phase 5 Club, Opposite ...',
    phone: '+91 955 523 8994',
    isSelected: false,
    onAction: () => {},
  },
  {
    id: 4,
    label: 'Other Location',
    address:
      'W3-092, 9th Floor, Wellington Estate, Near DLF Phase 5 Club, Opposite ...',
    phone: '+91 955 523 8994',
    isSelected: false,
    onAction: () => {},
  },
];

const Home: React.FC = () => {
  const scrollRef = useRef<ScrollView>(null);
  const {} = useViewModel();
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);

  const toggleSelectAddress = (id: number) => {
    setAddresses(prevAddresses =>
      prevAddresses.map(address =>
        address.id === id
          ? {...address, isSelected: !address.isSelected}
          : address,
      ),
    );
  };

  const deleteSelectedAddresses = () => {
    const selectedAddresses = addresses.filter(address => address.isSelected);
    if (selectedAddresses.length === 0) {
      Alert.alert(
        'Attention',
        'Please select one or more addresses to delete.',
      );
    } else {
      setAddresses(prevAddresses =>
        prevAddresses.filter(address => !address.isSelected),
      );
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
      <Button
        type="auxiliary"
        size="large"
        title="Adicionar novo endereço"
        onPress={() => {}}
      />

      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}>
        {addresses.map(address => (
          <AddressCard
            key={address.id}
            {...address}
            onAction={toggleSelectAddress}
          />
        ))}
      </ScrollView>
    </S.Container>
  );
};

export default Home;
