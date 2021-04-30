import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.theme.Colors.gray_light};
  flex: 1;
  align-items: center;
`;

export const StatusBar = styled.StatusBar.attrs((props) => ({
  backgroundColor: props.theme.Colors.black,
  barStyle: 'light-content',
}))``;

export const ContainerIndicator = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
