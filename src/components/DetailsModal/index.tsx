import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import {useTheme} from 'styled-components';
import Button from '../Button';
import * as S from './styles';

export interface IDetailsModalProps {
  isVisible?: boolean;
  onClose: () => void;
  color?: number;
  image?: string;
  rocket?: string;
  launchDate?: string;
  launchStatus?: string;
  details?: string;
  videoId?: string;
  wikipediaURL?: string;
}

export const TestIds: {[key: string]: string} = {
  rootView: 'DetailsModal/rootView',
};

const DetailsModal = (props: IDetailsModalProps) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const scrollRef = useRef<ScrollView>(null);
  const navigation = useNavigation();

  const closeYoutubeVideo = () => {
    setShowOverlay(false);
  };

  const theme = useTheme();
  const {
    onClose,
    isVisible,
    videoId,
    color,
    image,
    rocket,
    launchDate,
    launchStatus,
    details,
    wikipediaURL,
  } = props;

  return (
    <Modal
      isVisible={isVisible}
      accessibilityHint="Modal de historia"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      animationIn={'slideInUp'}
      onBackButtonPress={onClose}
      animationOut={'slideOutDown'}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <S.ModalBackground>
        <S.Overlay>
          {showOverlay && (
            <S.Overlay>
              <Feather
                name="x"
                size={26}
                color={theme.colors.white}
                onPress={closeYoutubeVideo}
                style={{position: 'absolute', top: 16, right: 16}}
              />
            </S.Overlay>
          )}
        </S.Overlay>
        <ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}>
          <S.Container>
            <S.Header>
              <Feather
                name="x"
                size={26}
                color={theme.colors.white}
                onPress={() => {
                  closeYoutubeVideo();
                  onClose();
                }}
              />
            </S.Header>
            <S.ImageContainer>
              <S.Image
                source={{uri: image}}
                style={{
                  resizeMode: 'contain',
                  width: 100,
                  height: 100,
                }}
              />
            </S.ImageContainer>
            <S.Content>
              <S.Title>ROCKET</S.Title>
              <S.Subtitle>{rocket}</S.Subtitle>

              <S.Title>LAUNCH DATE</S.Title>
              <S.Subtitle>{launchDate}</S.Subtitle>

              <S.Title>DETAILS</S.Title>
              <S.Subtitle>{details}</S.Subtitle>

              <S.Title>LAUNCH STATUS</S.Title>
              <S.Subtitle>{launchStatus}</S.Subtitle>

              <S.Title>FIRST STAGE</S.Title>
              <S.Subtitle>Cores: {color}</S.Subtitle>
            </S.Content>
            <S.ButtonsViews>
              <S.FooterContent>
                <Button
                  title="Youtube"
                  type="accept"
                  size="small"
                  onPress={() => {
                    setShowOverlay(true);
                  }}
                />
                <Button
                  title="Wikipedia"
                  type="link"
                  size="small"
                  onPress={() => {
                    navigation.navigate('WebViewPage', {
                      url: wikipediaURL || '',
                    });
                    onClose();
                  }}
                />
              </S.FooterContent>
            </S.ButtonsViews>
          </S.Container>
        </ScrollView>
      </S.ModalBackground>
    </Modal>
  );
};

export default DetailsModal;
