import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme}) => theme.spacings.medium};
`;

export const BackButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.large};
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.darkGray};
  line-height: 24px;
`;

export const MoreButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const AddButton = styled.TouchableOpacity`
  margin: 20px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 5px;
  padding: 15px;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.medium};
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.white};
  line-height: 24px;
`;
