import {SignInForm} from '@components/Forms/SignInForm';
import Header from '@components/Header';
import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import * as S from './styles';

export function SignIn() {
  return (
    <S.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Header arrowDisabled />
        <S.Content>
          <S.SubTitle>Bem vindo, faça seu login para iniciar!</S.SubTitle>
          <SignInForm />
        </S.Content>
      </KeyboardAvoidingView>
    </S.Container>
  );
}
