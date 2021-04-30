import styled from 'styled-components/native';
import {s, vs} from 'react-native-size-matters';
import {Text} from '~/components/global';

export const Container = styled.View`
  margin-top: ${vs(15)}px;
  flex: 0.9;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingBottom: vs(50)},
})`
  flex: 1;
`;

export const ContainerCompany = styled.TouchableOpacity.attrs((props) => ({
  borderRadius: 20,
  shadowOpacity: 1.0,
  shadowColor: props.theme.Colors.gray_dark,
  shadowOffset: {height: 0, width: 0},
  elevation: 2,
}))`
  width: 43%;
  height: ${vs(160)}px;
  margin-left: ${s(20)}px;
  margin-bottom: ${vs(20)}px;
  background: ${(props) => props.theme.Colors.white};
  border-radius: 20px;
  padding: 0px 0px 0px 10px;
  justify-content: center;
`;

export const NameCompany = styled(Text)`
  font-size: ${s(20)}px;
  font-weight: 700;
  color: ${(props) => props.theme.Colors.black};
`;
