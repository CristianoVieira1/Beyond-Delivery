// import Icon from 'react-native-vector-icons/MaterialIcons';
// import styled from 'styled-components/native';
// import theme from '../../theme';

// interface AddressCardProps {
//   isSelected: boolean;
// }

// export const AddressCard = styled.View<AddressCardProps>`
//   background-color: ${({isSelected}) => (isSelected ? '#f0f8ff' : '#fff')};
//   padding: 16px;
//   border: 1px solid
//     ${({isSelected}) => (isSelected ? theme.colors.primary : '#ddd')};
//   border-radius: 8px;
//   margin-bottom: 16px;
// `;

// export const AddressHeader = styled.View`
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
// `;

// export const AddressIcon = styled(Icon).attrs({
//   size: 24,
//   color: theme.colors.primary,
// })`
//   margin-left: 8px;
// `;

// export const AddressLabel = styled.Text`
//   font-size: ${({theme}) => theme.fonts.sizes.small};
//   font-family: ${({theme}) => theme.fonts.medium};
//   color: ${({theme}) => theme.colors.darkGray};
//   line-height: 24px;
// `;

// export const AddressBody = styled.View`
//   margin-top: 8px;
// `;

// export const AddressText = styled.Text`
//   color: ${({theme}) => theme.colors.gray};
// `;

// export const PhoneText = styled.Text`
//   color: ${({theme}) => theme.colors.gray};
//   margin: 4px 0;
// `;

// export const ViewOnMapText = styled.Text`
//   color: ${({theme}) => theme.colors.primary};
//   font-weight: bold;
//   margin-top: 8px;
// `;
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Header = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-color: #ddd;
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
  border: 1px solid #ddd;
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

export const PhoneText = styled.Text`
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
