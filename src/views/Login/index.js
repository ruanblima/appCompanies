import React, {useState, useEffect} from 'react';
import {s, vs} from 'react-native-size-matters';
import {Image, KeyboardAvoidingView, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Logo} from '~/assets';

import {loginUser} from '~/store/ducks/user';

import {messageAlert} from '~/utils';

import {
  Container,
  InputText,
  ContainerInput,
  IconPasswordViewer,
  IconEmail,
  ContainerButton,
  Button,
  ButtonText,
  ContainerImage,
  StatusBar,
} from './styles';

const Login = () => {
  const {loginHasError} = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loginHasError) {
      messageAlert('Verifique se o e-mail ou senha estão corretos');
    }
  }, [loginHasError]);

  const signAction = () => {
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!(email.trim() && password)) {
      return messageAlert('Preencha todos os campos');
    }
    if (regEmail.test(email.trim()) === false) {
      return messageAlert('Verifique se o e-mail é válido');
    }
    dispatch(loginUser(email, password));
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container>
        <StatusBar />
        <ContainerImage>
          <Image
            style={{
              width: s(270),
              height: s(120),
            }}
            source={Logo}
          />
        </ContainerImage>
        <ContainerInput>
          <InputText
            placeholder="E-mail"
            autoCapitalize="none"
            autoCompleteType="off"
            value={email}
            onChangeText={setEmail}
          />
          <IconEmail />
        </ContainerInput>

        <ContainerInput>
          <InputText
            style={{paddingRight: vs(8)}}
            placeholder="Senha"
            autoCapitalize="none"
            secureTextEntry={secureTextEntry}
            autoCompleteType="off"
            value={password}
            onChangeText={setPassword}
          />

          <IconPasswordViewer
            name={!secureTextEntry ? 'eye-off' : 'eye'}
            onTouchStart={() => setSecureTextEntry(!secureTextEntry)}
          />
        </ContainerInput>

        <ContainerButton>
          <Button onPress={() => signAction()}>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </ContainerButton>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Login;
