import styled from 'styled-components/native';
import {s, vs} from 'react-native-size-matters';
import {Text, Icon} from '~/components/global';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.Colors.grayScreen};
  align-items: center;
  justify-content: center;
`;

export const Main = styled.View`
  background: ${(props) => props.theme.Colors.white};
  padding: 10px;
  width: 90%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const RowButton = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const RowButtonClose = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 5px 0px 0px;
`;

export const Touchable = styled.TouchableOpacity``;

export const ButtonExit = styled.TouchableOpacity`
  background: ${(props) => props.theme.Colors.red};
  width: 80%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const ButtonTextExit = styled(Text)`
  color: ${(props) => props.theme.Colors.white};
  font-size: ${s(25)}px;
`;

export const IconPerson = styled((props) => Icon(props, 'ION')).attrs(
  (props) => ({
    color: props.theme.Colors.black,
    name: 'person-circle-sharp',
  }),
)`
  font-size: ${s(90)}px;
  margin-top: ${vs(3.5)}px;
`;

export const IconClose = styled((props) => Icon(props, 'ION')).attrs(
  (props) => ({
    color: props.theme.Colors.black,
    name: 'close',
  }),
)`
  font-size: ${s(20)}px;
  margin-top: ${vs(3.5)}px;
  padding-bottom: ${vs(5)}px;
`;

export const NameText = styled(Text)`
  color: ${(props) => props.theme.Colors.black};
  font-size: ${s(25)}px;
`;

export const ContainerInformation = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmailText = styled(Text)`
  color: ${(props) => props.theme.Colors.black};
  font-size: ${s(20)}px;
`;

export const ContainerEmail = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${vs(20)}px;
`;
