import styled from 'styled-components/native';
import {s, vs} from 'react-native-size-matters';
import {Text} from '~/components/global';

export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.Colors.gray_light};
  flex: 1;
  padding: 10px;
`;

export const ContainerImage = styled.View`
  width: 100%;
  align-items: center;
`;

export const ContainerDetails = styled.View.attrs((props) => ({
  borderRadius: 10,
  shadowOpacity: 0.45,
  shadowColor: props.theme.Colors.gray_light,
  shadowOffset: {height: 3, width: 1},
  elevation: 3,
}))`
  width: 100%;
  margin-bottom: ${vs(20)}px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  background: ${(props) => props.theme.Colors.white};
`;

export const DetailsTitleText = styled(Text)`
  font-size: ${s(13)}px;
  font-weight: bold;
  color: ${(props) => props.theme.Colors.dark};
`;

export const DetailsText = styled(Text)`
  font-size: ${s(11)}px;
  color: ${(props) => props.theme.Colors.dark};
`;

export const DescriptionText = styled(Text)`
  font-size: ${s(14)}px;
  color: ${(props) => props.theme.Colors.dark};
`;

export const NameComany = styled(Text)`
  font-size: ${s(30)}px;
  font-weight: 700;
  color: ${(props) => props.theme.Colors.dark};
`;

export const ContainerName = styled.View`
  width: 100%;
  margin-bottom: ${vs(20)}px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ContainerTitleDetails = styled.View`
  margin-bottom: ${vs(10)}px;
  justify-content: center;
  align-items: center;
`;
