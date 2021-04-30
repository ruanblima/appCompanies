import styled from 'styled-components/native';
import {s} from 'react-native-size-matters';
import {Text} from '~/components/global';

export const Container = styled.View`
  flex: 0.1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  background: ${(props) => props.theme.Colors.black};
`;

export const TitleText = styled(Text)`
  font-size: ${s(30)}px;
  margin-left: ${s(1)}px;
  font-weight: 700;
  color: ${(props) => props.theme.Colors.white};
`;

export const ContainerImage = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
