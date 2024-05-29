import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const SectionTitle = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.medium};
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.darkGray};
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
