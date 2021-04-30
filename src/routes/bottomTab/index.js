import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {HOME} from '~/constants/routesNames';

import {
  IconTab,
  TitleScreen,
  Touchable,
  Container,
  ContainerTab,
} from './styles';

const BottomTab = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const {Colors} = useContext(ThemeContext);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const renderTab = (route, index) => {
    const {options} = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    const nameScreen = label === HOME ? 'Home' : 'Pesquisar';

    return (
      <Touchable
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}>
        <IconTab
          name={
            label === HOME ? (isFocused ? 'home' : 'home-outline') : 'search'
          }
          typeIcon="ION"
          color={isFocused ? Colors.black : Colors.gray_dark}
        />

        <TitleScreen color={isFocused ? Colors.black : Colors.gray_dark}>
          {nameScreen}
        </TitleScreen>
      </Touchable>
    );
  };

  return (
    <Container>
      {state.routes.map((route, index) => {
        return (
          <ContainerTab key={index}>{renderTab(route, index)}</ContainerTab>
        );
      })}
    </Container>
  );
};

export default BottomTab;
