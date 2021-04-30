import styled from 'styled-components/native';
import {s, vs} from 'react-native-size-matters';
import {TextInput, Text, Icon} from '~/components/global';

export const Container = styled.View`
  background-color: ${(props) => props.theme.Colors.white};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StatusBar = styled.StatusBar.attrs((props) => ({
  backgroundColor: props.theme.Colors.white,
  barStyle: 'dark-content',
}))``;

export const InputText = styled(TextInput).attrs((props) => ({
  placeholderTextColor: props.theme.Colors.gray_dark,
}))`
  flex: 1;
  padding-left: ${s(10)}px;
  font-size: ${(props) => s(props.theme.fontSizeInput)}px;
  padding-bottom: ${vs(10)}px;
`;

export const ContainerInput = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${s(15)}px;
  padding: 10px;
  background: ${(props) => props.theme.Colors.gray_light};
  border-radius: 20px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  padding-top: ${vs(10)}px;
  padding-bottom: ${vs(50)}px;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
`;

export const ContainerImage = styled.View`
  padding-bottom: ${vs(20)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.View`
  padding-top: ${vs(30)}px;
  padding-bottom: ${vs(20)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: ${vs(10)}px;
  height: ${s(50)}px;
  border-radius: 10px;
  background: ${(props) => props.theme.Colors.black};
  width: 80%;
`;

export const ButtonText = styled(Text)`
  font-size: ${s(20)}px;
  margin-left: ${s(1)}px;
  color: ${(props) => props.theme.Colors.white};
`;

export const ContainerForgetPassword = styled.TouchableOpacity`
  align-self: flex-end;
  align-items: center;
  flex-direction: row;
  margin-top: ${vs(10)}px;
  border-radius: 10px;
`;

export const ForgetPassword = styled(Text)`
  font-size: ${s(15)}px;
  margin-left: ${s(1)}px;
  color: ${(props) => props.theme.Colors.dark};
`;

export const IconPasswordViewer = styled((props) => Icon(props, 'MCI')).attrs(
  (props) => ({
    color: props.theme.Colors.black,
  }),
)`
  font-size: ${s(25)}px;
  margin-top: ${vs(3.5)}px;
  padding-bottom: ${vs(1.5)}px;
`;

export const IconEmail = styled((props) => Icon(props, 'MCI')).attrs(
  (props) => ({
    name: 'email',
    color: props.theme.Colors.black,
  }),
)`
  font-size: ${s(25)}px;
  margin-top: ${vs(3.5)}px;
  margin-right: ${s(3)}px;
  padding-bottom: ${vs(1.5)}px;
`;
