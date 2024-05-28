import React, { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity } from 'react-native';
import HelperIcon from 'react-native-vector-icons/FontAwesome';

import THEME from '../../../theme';

interface Props {
  isVisible: boolean;
  changeVisibility: Dispatch<SetStateAction<boolean>>;
  colorSecure?: 'white' | 'blue'
}

const SecureText = ({isVisible, changeVisibility, colorSecure = THEME.colors.darkGray}: Props) => {
  const iconName = isVisible ? 'eye-slash' : 'eye';

  return (
    <TouchableOpacity onPress={() => changeVisibility((prevValue) => !prevValue)}>
      <HelperIcon name={iconName} size={24} color={colorSecure} />
    </TouchableOpacity>
  );
};

export default SecureText;
