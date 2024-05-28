import React, {useEffect} from 'react';

import Planet from '@assets/animations/planets.json';
import Logo from '@assets/images/logo.png';
import {Lottie} from '@components/Animations/Lottie';
import {useNavigation} from '@react-navigation/native';
import * as S from './styles';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        handleNextRoute();
      }, 4000);
    }, 1700);
  }, []);

  async function handleNextRoute() {
    navigation.navigate('InitialAccess');
    return;
  }

  return (
    <S.Container testID="screen-splash">
      <S.Content animation={'bounceInRight'} useNativeDriver duration={6000}>
        <S.Logo source={Logo} />
        <Lottie source={Planet} width={300} height={300} useNativeLooping />
      </S.Content>
    </S.Container>
  );
};

export default SplashScreen;
