import Logo from '@assets/images/logo.png';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import theme from '../../theme';
import * as S from './styles';

interface IHeaderProps {
  arrowDisabled?: boolean;
  title?: string;
  TitleColor?: string;
}

const Header = ({arrowDisabled, title, TitleColor}: IHeaderProps) => {
  const navigation = useNavigation();

  function handleBackPage() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.Content>
        {arrowDisabled ?? (
          <Feather
            name="arrow-left"
            size={26}
            color={theme.colors.white}
            onPress={() => {
              handleBackPage();
            }}
          />
        )}
        {title ? (
          <S.Title color={TitleColor}>{title}</S.Title>
        ) : (
          <S.Logo>
            <Image source={Logo} width={200} />
          </S.Logo>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Header;
