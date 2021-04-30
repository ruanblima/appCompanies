import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '~/views/Home';

import {HOME} from '~/constants/routesNames';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator headerMode="float" mode="modal">
    <Stack.Screen name={HOME} component={Home} options={{headerShown: false}} />
  </Stack.Navigator>
);

export default HomeStack;
