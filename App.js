import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/Screens/HomeScreen';
import TheoryScreen from './src/Screens/TheoryScreen';
import SelectScreen from './src/Screens/SelectScreen';
import ShowKeyScreen from './src/Screens/ShowKeyScreen';

import { withNavigation } from '@react-navigation/compat';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Theory" component={TheoryScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Select" component={SelectScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Thelonious" component={MainTabs} />
        <Stack.Screen name="ShowKeyScreen" component={ShowKeyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
