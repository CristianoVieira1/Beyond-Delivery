import {heightPercentageToDP} from '@utils/DeviceResolution/index';
import styled from 'styled-components/native';

export const Form = styled.View`
  margin-top: ${heightPercentageToDP('8%')}px;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.large};
  margin-bottom: 24px;
  align-self: flex-start;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.white};
`;

export const SociaisButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${heightPercentageToDP('10%')}px;
`;
