import React, { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

type Props = TouchableOpacityProps & {
  icon: FC<SvgProps>;
};

export function ButtonSociais({ icon: Icon, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      {Icon && <Icon width={45} height={45} color={theme.colors.black} />}
    </Container>
  );
}
