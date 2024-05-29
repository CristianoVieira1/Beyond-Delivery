import {AddressModalProps} from '../..';
import InputText from '../../../InputText';
import useDeliveryInfoViewModel from '../../ViewModel/useDeliveryInfoViewModel';
import * as S from './styles';

const Collection = ({onClose, onSave}: AddressModalProps) => {
  const {
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
  } = useDeliveryInfoViewModel({
    onClose,
    onSave,
  });

  return (
    <S.Container>
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
      />

      <InputText
        mask="addressCity"
        placeholder="Ponto de referência (opcional)"
        value={collectionLandmark}
        onChangeText={setCollectionLandmark}
        autoCapitalize="none"
        autoComplete="off"
        label="Ponto de referência (opcional)"
        keyboardType="default"
      />
    </S.Container>
  );
};

export default Collection;
