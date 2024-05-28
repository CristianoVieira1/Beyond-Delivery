import {useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {mask as useMask} from 'react-native-mask-text';

import {Mask, Props} from '.';
import {PointEvents} from '../../types';

export const useViewModel = (props: Props) => {
  const {
    validation,
    onChangeText,
    clearValidation,
    mask = 'default',
    disabled = false,
    displaySecureIndicator = false,
  } = props;

  const inputRef = useRef<TextInput | undefined>();
  const pointEvent: PointEvents = disabled ? 'none' : 'box-none';
  const [isVisible, setVisible] = useState(displaySecureIndicator);

  const handleTextChange = (text: string): void => {
    const inputType: Record<Mask, string> = {
      default: text,
      cep: useMask(text, '99999-999'),
      date: useMask(text, '99/99/9999'),
      cpf: useMask(text, '999.999.999-99'),
      dddNumber: useMask(text, '99'),
      phoneNumber: useMask(text, '99999-9999'),
      password: useMask(text, '999999'),
    };

    onChangeText(inputType[mask]);

    if (!!validation && clearValidation) {
      clearValidation();
    }
  };

  const triggerInputFocus = (): void => {
    inputRef?.current?.focus();
  };

  return {
    inputRef,
    isVisible,
    setVisible,
    pointEvent,
    handleTextChange,
    triggerInputFocus,
    ...props,
  };
};
