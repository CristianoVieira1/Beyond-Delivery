import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${({theme}) => theme.device.width}px;
`;

export const Content = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 32px;
  padding: 20px;
`;

export const Logo = styled.View`
  align-items: center;
  justify-content: center;
  width: 95%;
`;

interface ITitleProps {
  color?: string;
}

export const Title = styled.Text<ITitleProps>`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${({theme}) => theme.fonts.sizes.medium};
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme, color}) => color ?? theme.colors.white};
  width: 80%;
`;
