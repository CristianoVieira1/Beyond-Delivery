import Apple from '@assets/icons/redes_socias/apple_black.svg';
import Facebook from '@assets/icons/redes_socias/facebook_blue.svg';
import Google from '@assets/icons/redes_socias/google_red.svg';
import Instagram from '@assets/icons/redes_socias/instagram_linear.svg';
import Button from '@components/Button';
import {ButtonSociais} from '@components/ButtonSociais';
import InputText from '@components/InputText';
import React from 'react';
import {useTranslation} from 'react-i18next';
import useSignInViewModel from './ViewModel/useSignInViewModel';
import * as S from './styles';

export function SignInForm() {
  const {t} = useTranslation();

  const {
    validationMessage,
    setValidationMessage,
    setValidationPassword,
    validationPassword,
    isLoading,
    password,
    setPassword,
    email,
    setEmail,
    handleSignIn,
    isSubmitButtonAvailable,
  } = useSignInViewModel();

  return (
    <S.Form>
      <S.Title>{t('titleSignIn')}</S.Title>
      <InputText
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete="off"
        label="Digite seu E-mail"
        keyboardType="email-address"
        validation={validationMessage}
        clearValidation={() => setValidationMessage('')}
      />

      <InputText
        mask={'password'}
        value={password}
        displaySecureIndicator={true}
        autoCorrect={false}
        autoComplete="off"
        autoCapitalize="none"
        validation={validationPassword}
        onChangeText={setPassword}
        label="Digite sua senha"
        placeholder="Senha"
        clearValidation={() => setValidationPassword('')}
        keyboardType="default"
      />

      <Button
        type={isSubmitButtonAvailable ? 'accept' : 'cancel'}
        title={t('buttonSignIn')}
        size="large"
        disabled={isSubmitButtonAvailable ? false : true}
        loading={isLoading}
        onPress={() => handleSignIn()}
      />

      <S.SociaisButtons>
        <ButtonSociais icon={Facebook} onPress={() => {}} />
        <ButtonSociais icon={Google} onPress={() => {}} />
        <ButtonSociais icon={Instagram} onPress={() => {}} />
        <ButtonSociais icon={Apple} onPress={() => {}} />
      </S.SociaisButtons>
    </S.Form>
  );
}
