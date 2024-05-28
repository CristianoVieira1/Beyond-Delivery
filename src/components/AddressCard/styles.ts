import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import theme from '../../theme';

interface AddressCardProps {
  isSelected: boolean;
}

export const AddressCard = styled.TouchableOpacity<AddressCardProps>`
  background-color: ${({isSelected}) => (isSelected ? '#f0f8ff' : '#fff')};
  padding: 16px;
  border: 1px solid
    ${({isSelected}) => (isSelected ? theme.colors.primary : '#ddd')};
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const AddressHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AddressIcon = styled(Icon).attrs({
  size: 24,
  color: theme.colors.primary,
})`
  margin-left: 8px;
`;

export const AddressLabel = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.small};
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.darkGray};
  line-height: 24px;
`;

export const AddressBody = styled.View`
  margin-top: 8px;
`;

export const AddressText = styled.Text`
  color: ${({theme}) => theme.colors.gray};
`;

export const PhoneText = styled.Text`
  color: ${({theme}) => theme.colors.gray};
  margin: 4px 0;
`;

export const ViewOnMapText = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-weight: bold;
  margin-top: 8px;
`;
