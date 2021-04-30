import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {logout} from '~/store/ducks/user';

import {
  Container,
  RowButton,
  Main,
  ButtonExit,
  ButtonTextExit,
  IconPerson,
  IconClose,
  RowButtonClose,
  Touchable,
  ContainerInformation,
  NameText,
  ContainerEmail,
  EmailText,
} from './styles';

const ModalUser = (props) => {
  const {closeModal} = props;

  const {investor} = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const doLogout = () => {
    closeModal();
    dispatch(logout());
  };

  return (
    <Container>
      <Main>
        <RowButtonClose>
          <Touchable onPress={() => closeModal()}>
            <IconClose />
          </Touchable>
        </RowButtonClose>
        <IconPerson />

        <ContainerInformation>
          <NameText>{investor.investor_name}</NameText>
        </ContainerInformation>

        <ContainerEmail>
          <EmailText>{investor.email}</EmailText>
        </ContainerEmail>
        <RowButton>
          <ButtonExit onPress={() => doLogout()}>
            <ButtonTextExit>Sair</ButtonTextExit>
          </ButtonExit>
        </RowButton>
      </Main>
    </Container>
  );
};

export default ModalUser;
