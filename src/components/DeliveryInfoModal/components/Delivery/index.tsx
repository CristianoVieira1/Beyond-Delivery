import {AddressModalProps} from '../..';
import InputText from '../../../InputText';
import useDeliveryInfoViewModel from '../../ViewModel/useDeliveryInfoViewModel';
import * as S from './styles';

const Delivery = ({onClose, onSave}: AddressModalProps) => {
  const {
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
      />

      <InputText
        mask="addressCity"
        placeholder="Ponto de referência (opcional)"
        value={deliveryLandmark}
        onChangeText={setDeliveryLandmark}
        autoCapitalize="none"
        autoComplete="off"
        label="Ponto de referência (opcional)"
        keyboardType="default"
      />
    </S.Container>
  );
};

export default Delivery;
