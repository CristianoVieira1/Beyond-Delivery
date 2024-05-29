import React, {memo} from 'react';
import {TextInputProps} from 'react-native';

import Theme from '../../theme';
import SecureText from './SecureText';
import {
  Container,
  Content,
  Input,
  Label,
  TouchArea,
  ValidationMessage,
} from './styles';
import {useViewModel} from './viewMode';

export type Mask =
  | 'cpf'
  | 'cep'
  | 'date'
  | 'default'
  | 'password'
  | 'dddNumber'
  | 'phoneNumber'
  | 'addressState'
  | 'addressCity'
  | 'addressNumber';

export type BackgroundColor = 'transparent' | 'white';
export type ColorPlaceholder = 'blue' | 'white';
export type ColorLabel = 'blue' | 'white';

export interface Props extends TextInputProps {
  mask?: Mask;
  label: string;
  labelColor?: string;
  disabled?: boolean;
  backgroundColor?: BackgroundColor;
  colorText?: string;
  inputLength?: number;
  messageError?: string;
  validation?: string | boolean;
  clearValidation?: () => void;
  displaySecureIndicator?: boolean;
  onChangeText: (text: string) => void;
}

const InputText = (props: Props) => {
  const {
    label,
    labelColor = Theme.colors.opacityBlack,
    inputRef,
    isVisible,
    validation,
    pointEvent,
    setVisible,
    onChangeText,
    messageError,
    inputLength,
    clearValidation,
    handleTextChange,
    colorText = Theme.colors.darkGray,
    disabled = false,
    mask = 'default',
    backgroundColor = 'white',
    triggerInputFocus,
    displaySecureIndicator = false,
    ...others
  } = useViewModel(props);

  return (
    <Container disabled={disabled}>
      <Label labelColor={labelColor}>{label}</Label>

      <TouchArea pointerEvents={pointEvent}>
        <Content
          disabled={disabled}
          activeOpacity={0.9}
          backgroundColor={backgroundColor}
          hasError={!!validation}
          onPress={triggerInputFocus}>
          <Input
            {...others}
            ref={inputRef}
            colorText={colorText}
            disabled={disabled}
            secureTextEntry={isVisible}
            onChangeText={handleTextChange}
            hasSecureIndicator={displaySecureIndicator}
            placeholderTextColor={Theme.colors.placeholderTextColor}
          />

          {displaySecureIndicator && (
            <SecureText isVisible={isVisible} changeVisibility={setVisible} />
          )}
        </Content>
      </TouchArea>

      <ValidationMessage>{validation}</ValidationMessage>
    </Container>
  );
};

export default memo(InputText);
