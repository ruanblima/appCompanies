import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HOME, SEARCH_COMPANY} from '~/constants/routesNames';

import BottomTab from '~/routes/bottomTab';

import Navigators from '~/routes/stackNavigators';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
    <Tab.Screen name={HOME} component={Navigators.Home} />
    <Tab.Screen name={SEARCH_COMPANY} component={Navigators.SearchCompany} />
  </Tab.Navigator>
);

export default Tabs;
