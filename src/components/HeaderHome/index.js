import React, {useState} from 'react';
import {Image, Modal} from 'react-native';
import {s} from 'react-native-size-matters';

import {LogoUnnamed} from '~/assets';

import ModalUser from '~/components/ModalUser';

import {Container, TitleText, ContainerImage} from './styles';

const HeaderHome = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  return (
    <Container>
      <TitleText>Empresas</TitleText>
      <ContainerImage onPress={() => setModalIsVisible(true)}>
        <Image
          style={{
            width: s(50),
            height: s(50),
            borderRadius: s(50),
          }}
          source={LogoUnnamed}
        />
      </ContainerImage>

      <Modal
        transparent
        visible={modalIsVisible}
        onRequestClose={() => setModalIsVisible(false)}>
        <ModalUser closeModal={() => setModalIsVisible(false)} />
      </Modal>
    </Container>
  );
};

export default HeaderHome;
