import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray};
`;

export const Header = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.white};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.gray};
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.small};
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.darkGray};
  line-height: 24px;
  margin-bottom: 5px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-color: ${({theme}) => theme.colors.gray};
  border-width: 1px;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  padding: 10px;
  border-radius: 5px;
  align-items: center;
`;

export const AddressCard = styled.View<{isSelected: boolean}>`
  background-color: ${props => (props.isSelected ? '#d1c4e9' : '#fff')};
  padding: 15px;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid ${({theme}) => theme.colors.gray};
`;

export const AddressHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AddressLabel = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.medium};
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.darkGray};
  line-height: 24px;
`;

export const AddressIcon = styled(Icon)`
  font-size: 24px;
  color: ${({theme}) => theme.colors.primary};
`;

export const AddressBody = styled.View`
  margin-top: 10px;
`;

export const AddressText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.small};
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.darkGray};
  line-height: 24px;
  margin-bottom: 5px;
`;

export const WordText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.small};
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.darkGray};
  line-height: 24px;
  margin-bottom: 5px;
`;

export const ViewOnMapText = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  text-decoration: underline;
  font-size: 14px;
  margin-top: 10px;
`;
