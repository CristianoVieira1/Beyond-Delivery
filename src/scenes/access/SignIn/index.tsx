import {SignInForm} from '@components/Forms/SignInForm';
import Header from '@components/Header';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {KeyboardAvoidingView, Platform} from 'react-native';
import * as S from './styles';

export function SignIn() {
  const {t} = useTranslation();
  return (
    <S.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Header arrowDisabled />
        <S.Content>
          <S.SubTitle>{t('welcomeSignIn')}</S.SubTitle>
          <SignInForm />
        </S.Content>
      </KeyboardAvoidingView>
    </S.Container>
  );
}
