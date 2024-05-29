import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

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

export const ButtonView = styled.View`
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.medium};
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.darkGray};
  line-height: 24px;
  padding: 10px;
`;

export const Subtitle = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.medium};
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.orange};
  line-height: 24px;
  padding: 10px;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: '#6200ea';
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
  margin-right: 10px;
`;

export const SaveButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const SelectorContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const SelectContainer = styled.View`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 16px;
`;

export const AddressHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
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

export const AddressOption = styled.TouchableOpacity<{selected: boolean}>`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  margin: 6px 0;
  border-width: 1px;
  border-color: ${({selected, theme}) =>
    selected ? theme.colors.primary : theme.colors.lightGray};
  border-radius: 8px;
  background-color: ${({selected, theme}) =>
    selected ? theme.colors.primaryLight : 'transparent'};
`;

export const SectionTitle = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.medium};
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.darkGray};
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
