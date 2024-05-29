import React, {useEffect, useRef, useState} from 'react';
import {Modal, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../theme';
import {Address} from '../AddressCard';
import Button from '../Button';
import useDeliveryInfoViewModel from './ViewModel/useDeliveryInfoViewModel';
import Collection from './components/Collection';
import Delivery from './components/Delivery';
import * as S from './styles';

export interface AddressModalProps {
  visible?: boolean;
  onClose: () => void;
  onSave: (
    collectionAddress: Omit<Address, 'onAction' | 'onViewOnMap'>,
    deliveryAddress: Omit<Address, 'onAction' | 'onViewOnMap'>,
  ) => void;
}

const AddressModal: React.FC<AddressModalProps> = ({
  visible,
  onClose,
  onSave,
}) => {
  const {handleSave} = useDeliveryInfoViewModel({
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

  const handleSelectCollectionTerra = () => {
    setSelectedCollectionTerra(true);
    setSelectedCollectionMarte(false);
    setCollectionSelected(true);
  };

  const handleSelectCollectionMarte = () => {
    setSelectedCollectionMarte(true);
    setSelectedCollectionTerra(false);
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

  const marteLots = [
    {id: '5521', label: 'Lote 5521'},
    {id: '5522', label: 'Lote 5522'},
    {id: '5523', label: 'Lote 5523'},
    {id: '5524', label: 'Lote 5524'},
  ];

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
                onPress={handleSelectCollectionTerra}
              />
              <Button
                type="select"
                title="Marte"
                onPress={handleSelectCollectionMarte}
              />
            </S.ButtonView>

            {selectedCollectionTerra ? (
              <Collection onClose={onClose} onSave={onSave} />
            ) : null}

            {selectedCollectionMarte ? (
              <>
                <S.Subtitle>Selecione o Lote em Marte</S.Subtitle>
                {marteLots.map(lot => (
                  <S.AddressOption
                    key={lot.id}
                    selected={selectedMarteAddress === lot.id}
                    onPress={() => handleSelectMarteAddress(lot.id)}>
                    <S.AddressIcon
                      name={
                        selectedMarteAddress === lot.id
                          ? 'check-box'
                          : 'check-box-outline-blank'
                      }
                    />
                    <S.AddressLabel>{lot.label}</S.AddressLabel>
                  </S.AddressOption>
                ))}
              </>
            ) : null}

            <S.Subtitle>Selecione o Mundo da Entrega</S.Subtitle>

            <S.ButtonView>
              <Button
                type="accept"
                title="Terra"
                onPress={handleSelectDeliveryTerra}
              />
              <Button
                type="select"
                title="Marte"
                onPress={handleSelectDeliveryMarte}
              />
            </S.ButtonView>

            {selectedDeliveryTerra ? (
              <Delivery onClose={onClose} onSave={onSave} />
            ) : null}

            {selectedDeliveryMarte ? (
              <>
                <S.Subtitle>Selecione o Lote em Marte</S.Subtitle>
                {marteLots.map(lot => (
                  <S.AddressOption
                    key={lot.id}
                    selected={selectedMarteAddress === lot.id}
                    onPress={() => handleSelectMarteAddress(lot.id)}>
                    <S.AddressIcon
                      name={
                        selectedMarteAddress === lot.id
                          ? 'check-box'
                          : 'check-box-outline-blank'
                      }
                    />
                    <S.AddressLabel>{lot.label}</S.AddressLabel>
                  </S.AddressOption>
                ))}
              </>
            ) : null}

            {(collectionSelected && deliverySelected) ||
            selectedDeliveryMarte ? (
              <Button
                type="accept"
                title="Salvar"
                onPress={() => handleSave()}
              />
            ) : null}
          </ScrollView>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};

export default AddressModal;
