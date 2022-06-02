import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../Screens/HomeScreen';
import FactsScreen from '../Screens/FactsScreen';
import HealthScreen from '../Screens/HealthScreen';
import DietScreen from '../Screens/DietScreen';
import WorkoutScreen from '../Screens/WorkoutScreen';

export default function SwitchNavigation() {
  return <AppContainer />;
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  FactsScreen:FactsScreen,
  HealthScreen:HealthScreen,
  DietScreen:DietScreen,
  WorkoutScreen:WorkoutScreen,
});

const AppContainer = createAppContainer(AppNavigator);
