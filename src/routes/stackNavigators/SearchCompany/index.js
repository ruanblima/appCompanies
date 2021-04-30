import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchCompany from '~/views/SearchCompany';

import {SEARCH_COMPANY} from '~/constants/routesNames';

const Stack = createStackNavigator();

const SearchCompanyStack = () => (
  <Stack.Navigator headerMode="float" mode="modal">
    <Stack.Screen
      name={SEARCH_COMPANY}
      component={SearchCompany}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default SearchCompanyStack;
