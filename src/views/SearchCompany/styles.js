import styled from 'styled-components/native';
import {s, vs} from 'react-native-size-matters';
import {Text} from '~/components/global';

export const Container = styled.View`
  background-color: ${(props) => props.theme.Colors.background};
  flex: 1;
`;

export const ContainerTypeCompany = styled.TouchableOpacity.attrs((props) => ({
  borderRadius: 20,
  shadowOpacity: 0.45,
  shadowColor: props.theme.Colors.gray_dark,
  shadowOffset: {height: 3, width: 1},
  elevation: 3,
}))`
  margin-left: ${s(10)}px;
  background: ${(props) => props.theme.Colors.orange};
  height: ${vs(40)}px;
  width: ${s(100)}px;
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const TitleTypeText = styled(Text)`
  font-size: ${s(15)}px;
  font-weight: bold;
  color: ${(props) => props.theme.Colors.white};
`;

export const List = styled.FlatList`
  flex: 0.1;
  padding: 10px;
`;

export const ContainerIndicator = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
