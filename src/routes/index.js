import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {LOGIN, HOME_TAB, DETAILS_COMPANY} from '~/constants/routesNames';

import Login from '~/views/Login';
import DetailsCompany from '~/views/DetailsCompany';

import Tabs from './tabNavigators';

const Stack = createStackNavigator();
const StackLogin = createStackNavigator();

export default function RootStack() {
  const {isLogged} = useSelector((state) => state.user);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <NavigationContainer>
        {isLogged ? (
          <Stack.Navigator
            initialRouteName={HOME_TAB}
            screenOptions={{
              gestureEnabled: false,
              animationEnabled: false,
            }}>
            <Stack.Screen
              name={HOME_TAB}
              component={Tabs}
              options={{title: 'Home', headerShown: false}}
            />

            <Stack.Screen name={DETAILS_COMPANY} component={DetailsCompany} />
          </Stack.Navigator>
        ) : (
          <StackLogin.Navigator
            initialRouteName={LOGIN}
            screenOptions={{
              gestureEnabled: false,
              animationEnabled: false,
            }}>
            <StackLogin.Screen
              name={LOGIN}
              component={Login}
              options={{title: 'Login', headerShown: false}}
            />
          </StackLogin.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}
