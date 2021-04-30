import styled from 'styled-components/native';
import {s, vs} from 'react-native-size-matters';
import {Text, Icon} from '~/components/global';

export const Container = styled.View`
  flex-direction: row;
  padding-top: ${vs(8)}px;
  padding-bottom: ${vs(8)}px;
  background-color: ${(props) => props.theme.Colors.white};
`;

export const ContainerTab = styled.View`
  flex: 1;
`;

export const IconTab = styled((props) => Icon(props, props.typeIcon)).attrs({})`
  font-size: ${s(30)}px;
  padding-bottom: 10px;
`;

export const TitleScreen = styled(Text)`
  font-size: ${s(17)}px;
  color: ${(props) => props.color};
`;

export const Touchable = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-around;
  align-content: center;
`;
