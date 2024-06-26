import AstronautLottie from '@assets/animations/astronaut.json';
import Logo from '@assets/images/logo.png';
import {Lottie} from '@components/Animations/Lottie';
import Button from '@components/Button';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {Image} from 'react-native';
import * as S from './styles';

const InitialAccess: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar translucent style="light" />
      <S.Container>
        <Lottie
          source={AstronautLottie}
          width={400}
          height={400}
          useNativeLooping
        />

        <S.Logo animation={'bounceInRight'} useNativeDriver duration={6500}>
          <Image source={Logo} />
        </S.Logo>

        <S.Submit animation={'bounceInLeft'} useNativeDriver duration={7500}>
          <Button
            title="Acessar"
            type="accept"
            size="medium"
            onPress={() => navigation.navigate('SignIn')}
          />
        </S.Submit>
      </S.Container>
    </>
  );
};

export default InitialAccess;
