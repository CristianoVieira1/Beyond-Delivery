import Load from '@components/Animations/Load';
import React, {memo} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import * as S from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title: string | undefined;
  loading?: boolean;
  type: S.TypeButton;
  size?: S.SizeButton;
  fontSize?: S.SizeButton;
}

function Button({
  title,
  loading = false,
  type,
  size = 'medium',
  ...rest
}: IButtonProps) {
  const theme = useTheme();
  return (
    <S.Container
      {...rest}
      activeOpacity={0.7}
      type={type}
      size={size}
      style={type !== 'link' && {...theme.shadow}}>
      {loading ? (
        <Load />
      ) : (
        <>
          <S.Content>
            <S.TitleButton type={type} size={size}>
              {title}
            </S.TitleButton>
          </S.Content>
        </>
      )}
    </S.Container>
  );
}
export default memo(Button);
