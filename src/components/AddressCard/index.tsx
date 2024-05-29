import React from 'react';
import * as S from './styles';

export interface Address {
  id: number;
  label: string;
  phone: string;
  address: string;
  coordinate: {latitude: number; longitude: number};
  isSelected: boolean;
  onAction?: (id: number) => void;
  onViewOnMap?: () => void;
}

const AddressCard = ({
  id,
  phone,
  label,
  address,
  onAction,
  isSelected,
  onViewOnMap,
}: Address) => {
  return (
    <S.AddressCard key={id} isSelected={isSelected}>
      <S.AddressHeader>
        <S.AddressLabel>{label}</S.AddressLabel>
        <S.AddressIcon
          name={isSelected ? 'check-box' : 'check-box-outline-blank'}
          onPress={() => onAction?.(id)}
        />
      </S.AddressHeader>
      <S.AddressBody>
        <S.AddressText>{address}</S.AddressText>
        <S.PhoneText>{phone}</S.PhoneText>
        <S.ViewOnMapText onPress={onViewOnMap}>Ver no mapa</S.ViewOnMapText>
      </S.AddressBody>
    </S.AddressCard>
  );
};

export default AddressCard;
