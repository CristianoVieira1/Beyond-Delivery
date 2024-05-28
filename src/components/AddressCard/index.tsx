import * as S from './styles';

export interface Address {
  id: number;
  label: string;
  phone: string;
  address: string;
  isSelected: boolean;
  onAction: (id: number) => void;
}

const AddressCard = ({
  id,
  phone,
  label,
  address,
  onAction,
  isSelected,
}: Address) => {
  return (
    <S.AddressCard
      key={id}
      isSelected={isSelected}
      onPress={() => onAction(id)}>
      <S.AddressHeader>
        <S.AddressLabel>{label}</S.AddressLabel>
        <S.AddressIcon
          name={isSelected ? 'check-box' : 'check-box-outline-blank'}
          onPress={() => onAction(id)}
        />
      </S.AddressHeader>
      <S.AddressBody>
        <S.AddressText>{address}</S.AddressText>
        <S.PhoneText>{phone}</S.PhoneText>
        <S.ViewOnMapText>View on map</S.ViewOnMapText>
      </S.AddressBody>
    </S.AddressCard>
  );
};

export default AddressCard;
