import React, {useEffect, useRef, useState} from 'react';
import {Modal, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../theme';
import {Address} from '../AddressCard';
import Button from '../Button';
import InputText from '../InputText';
import useDeliveryInfoViewModel from './ViewModel/useDeliveryInfoViewModel';
import * as S from './styles';

export interface AddressModalProps {
  visible?: boolean;
  onClose: () => void;
  onSave: (newAddresses: Address[]) => void;
}

const AddressModal: React.FC<AddressModalProps> = ({
  visible,
  onClose,
  onSave,
}) => {
  const {
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
    isSubmitButtonAvailable,
  } = useDeliveryInfoViewModel({
    onClose,
    onSave,
  });
  const scrollRef = useRef<ScrollView>(null);
  const [selectedCollectionTerra, setSelectedCollectionTerra] = useState(false);
  const [selectedCollectionMarte, setSelectedCollectionMarte] = useState(false);
  const [selectedDeliveryTerra, setSelectedDeliveryTerra] = useState(false);
  const [selectedDeliveryMarte, setSelectedDeliveryMarte] = useState(false);
  const [selectedMarteAddress, setSelectedMarteAddress] = useState('');
  const [collectionSelected, setCollectionSelected] = useState(false);
  const [deliverySelected, setDeliverySelected] = useState(false);

  useEffect(() => {
    setSelectedCollectionTerra(false);
    setSelectedCollectionMarte(false);
    setSelectedDeliveryTerra(false);
    setSelectedDeliveryMarte(false);
    setSelectedMarteAddress('');
    setCollectionSelected(false);
    setDeliverySelected(false);
  }, []);

  const handleSelectMarteAddress = (address: string) => {
    setSelectedMarteAddress(address);
    setCollectionSelected(true);
  };

  const handleSelectDeliveryTerra = () => {
    setSelectedDeliveryTerra(true);
    setSelectedDeliveryMarte(false);
    setDeliverySelected(true);
  };

  const handleSelectDeliveryMarte = () => {
    setSelectedDeliveryMarte(true);
    setSelectedDeliveryTerra(false);
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <S.ModalContainer>
        <S.ModalContent>
          <S.CloseButton onPress={onClose}>
            <Icon name="close" size={24} color={theme.colors.darkGray} />
          </S.CloseButton>
          <ScrollView
            ref={scrollRef}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}>
            <S.Title>Detalhes da entrega</S.Title>
            <S.Subtitle>Selecione o Mundo da coleta</S.Subtitle>

            <S.ButtonView>
              <Button
                type="accept"
                title="Terra"
                onPress={() => setCollectionWord('Terra')}
              />
              <Button
                type="select"
                title="Marte"
                onPress={() => setCollectionWord('Marte')}
              />
            </S.ButtonView>

            <S.SectionTitle>Endereço de Coleta</S.SectionTitle>
            <InputText
              mask="cep"
              placeholder="cep"
              value={collectionCep}
              onChangeText={setCollectionCep}
              autoCapitalize="none"
              autoComplete="off"
              label="Digite seu CEP"
              keyboardType="number-pad"
              onBlur={() => fetchAddress(collectionCep, 'collection')}
            />

            <InputText
              mask="default"
              placeholder="Endereço completo"
              value={collectionAddress}
              onChangeText={setCollectionAddress}
              autoCapitalize="none"
              autoComplete="off"
              label="Endereço completo"
              keyboardType="default"
              disabled
            />

            <InputText
              mask="addressNumber"
              placeholder="Número"
              value={collectionNumber}
              onChangeText={setCollectionNumber}
              autoCapitalize="none"
              autoComplete="off"
              label="Número"
              keyboardType="number-pad"
            />

            <InputText
              mask="addressNumber"
              placeholder="Estado"
              value={collectionState}
              onChangeText={setCollectionState}
              autoCapitalize="none"
              autoComplete="off"
              label="Estado"
              keyboardType="default"
              disabled
            />

            <InputText
              mask="addressCity"
              placeholder="Cidade"
              value={collectionCity}
              onChangeText={setCollectionCity}
              autoCapitalize="none"
              autoComplete="off"
              label="Cidade"
              keyboardType="default"
              disabled
            />

            <InputText
              mask="addressCity"
              placeholder="Bairro"
              value={collectionNeighborhood}
              onChangeText={setCollectionNeighborhood}
              autoCapitalize="none"
              autoComplete="off"
              label="Bairro"
              keyboardType="default"
              disabled
            />

            <InputText
              mask="default"
              placeholder="Ponto de referência (opcional)"
              value={collectionLandmark}
              onChangeText={setCollectionLandmark}
              autoCapitalize="none"
              autoComplete="off"
              label="Ponto de referência (opcional)"
              keyboardType="default"
            />

            <S.Subtitle>Selecione o Mundo da Entrega</S.Subtitle>

            <S.ButtonView>
              <Button
                type="accept"
                title="Terra"
                onPress={() => setDeliveryWord('Terra')}
              />
              <Button
                type="select"
                title="Marte"
                onPress={() => setDeliveryWord('Marte')}
              />
            </S.ButtonView>

            <S.SectionTitle>Endereço de Coleta</S.SectionTitle>
            <InputText
              mask="cep"
              placeholder="cep"
              value={deliveryCep}
              onChangeText={setDeliveryCep}
              autoCapitalize="none"
              autoComplete="off"
              label="Digite seu CEP"
              keyboardType="number-pad"
              onBlur={() => fetchAddress(deliveryCep, 'delivery')}
            />

            <InputText
              mask="default"
              placeholder="Endereço completo"
              value={deliveryAddress}
              onChangeText={setDeliveryAddress}
              autoCapitalize="none"
              autoComplete="off"
              label="Endereço completo"
              keyboardType="default"
              disabled
            />

            <InputText
              mask="addressNumber"
              placeholder="Número"
              value={deliveryNumber}
              onChangeText={setDeliveryNumber}
              autoCapitalize="none"
              autoComplete="off"
              label="Número"
              keyboardType="number-pad"
            />

            <InputText
              mask="addressNumber"
              placeholder="Estado"
              value={deliveryState}
              onChangeText={setDeliveryState}
              autoCapitalize="none"
              autoComplete="off"
              label="Estado"
              keyboardType="default"
              disabled
            />

            <InputText
              mask="addressCity"
              placeholder="Cidade"
              value={deliveryCity}
              onChangeText={setDeliveryCity}
              autoCapitalize="none"
              autoComplete="off"
              label="Cidade"
              keyboardType="default"
              disabled
            />

            <InputText
              mask="addressCity"
              placeholder="Bairro"
              value={deliveryNeighborhood}
              onChangeText={setDeliveryNeighborhood}
              autoCapitalize="none"
              autoComplete="off"
              label="Bairro"
              keyboardType="default"
              disabled
            />

            <InputText
              mask="default"
              placeholder="Ponto de referência (opcional)"
              value={deliveryLandmark}
              onChangeText={setDeliveryLandmark}
              autoCapitalize="none"
              autoComplete="off"
              label="Ponto de referência (opcional)"
              keyboardType="default"
            />

            <Button
              type={isSubmitButtonAvailable ? 'accept' : 'cancel'}
              title="Salvar"
              onPress={handleSave}
              disabled={isSubmitButtonAvailable ? false : true}
            />
          </ScrollView>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};

export default AddressModal;
