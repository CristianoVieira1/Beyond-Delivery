import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const MoreButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const AddButton = styled.TouchableOpacity`
  margin: 20px;
  background-color: #6200ee;
  border-radius: 5px;
  padding: 15px;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const AddressCard = styled.View<{isSelected: boolean}>`
  background-color: ${props => (props.isSelected ? '#e0e0e0' : '#fff')};
  padding: 15px;
  margin: 10px 20px;
  border-radius: 10px;
  elevation: 1;
`;

export const AddressHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AddressLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const AddressIcon = styled(Icon)`
  font-size: 24px;
`;

export const AddressBody = styled.View`
  margin-top: 10px;
`;

export const AddressText = styled.Text`
  font-size: 14px;
  color: #555;
`;

export const PhoneText = styled.Text`
  font-size: 14px;
  color: #555;
  margin-top: 5px;
`;

export const ViewOnMapText = styled.Text`
  font-size: 14px;
  color: #6200ee;
  margin-top: 5px;
  text-decoration: underline;
`;

export const InfoContainer = styled.View`
  padding: 20px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
