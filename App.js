import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/Screens/HomeScreen';
import TheoryScreen from './src/Screens/TheoryScreen';
import SelectScreen from './src/Screens/SelectScreen';
import KeyScreen from './src/Screens/KeyScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Theory" component={TheoryScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Select" component={SelectScreen} options={{ tabBarVisible: false }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="KeyScreen" component={KeyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
