import styled from 'styled-components/native';
import theme from '../../theme';

export type TypeButton =
  | 'accept'
  | 'disable'
  | 'link'
  | 'cancel'
  | 'filter'
  | 'auxiliary';
export type SizeButton = 'small' | 'medium' | 'large';
interface ButtonProps {
  type: TypeButton;
  size: SizeButton;
}

function ButtonColor(type: TypeButton) {
  switch (type) {
    case 'accept':
      return theme.colors.buttonAccept;
    case 'disable':
      return theme.colors.buttonDisable;
    case 'cancel':
      return theme.colors.white;
    case 'filter':
      return theme.colors.drawerIcons;
    case 'auxiliary':
      return theme.colors.lightPrimary;
    default:
      return theme.colors.buttonAccept;
  }
}

function ButtonTitleColor(type: TypeButton) {
  switch (type) {
    case 'accept':
      return theme.colors.white;
    case 'disable':
      return theme.colors.lightGray;
    case 'link':
      return theme.colors.buttonLink;
    case 'cancel':
      return theme.colors.darkGray;
    case 'filter':
      return theme.colors.white;
    case 'auxiliary':
      return theme.colors.primary;
    default:
      return theme.colors.lightPrimary;
  }
}

function sizeButton(size: string) {
  switch (size) {
    case 'xsmall':
      return '20';
    case 'small':
      return '40';
    case 'medium':
      return '50';
    case 'large':
      return '100';
    default:
      return '50';
  }
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: ${({size}) => (size ? sizeButton(size) : 100)}%;
  height: 45px;
  align-items: center;
  justify-content: center;
  ${({type}) => type !== 'link' && {background: ButtonColor(type)}};
  border-radius: 8px;

  ${({type}) =>
    type === 'cancel' && {
      borderWidth: 1,
      borderColor: theme.colors.lightGray,
    }};

  margin-bottom: 10px;
`;

export const TitleButton = styled.Text<ButtonProps>`
  font-size: ${({theme}) => theme.fonts.sizes.medium};
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({type}) => ButtonTitleColor(type)};
  ${({type}) =>
    type === 'accept' && {
      position: 'absolute',
    }};
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
