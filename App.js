import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/Screens/HomeScreen';
import TheoryScreen from './src/Screens/TheoryScreen';
import SelectScreen from './src/Screens/SelectScreen';
import ShowKeyScreen from './src/Screens/ShowKeyScreen';
import ProgScreen from './src/Screens/ProgScreen';

import ModesChartScreen from './src/Screens/ModesChartScreen';
import CagedScreen from './src/Screens/CagedScreen';

import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen
       name="Theory" 
       component={TheoryScreen} 
       options={{ 
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="book-outline" size={size} color={color} />
        ),
      }}
    />
      <Tab.Screen
       name="Home" 
       component={HomeScreen} 
       options={{ headerShown: false,
       tabBarIcon: ({color, size }) => (
        <Ionicons name="home" size={size} color={color} />
       ),
      }} 
    />
      <Tab.Screen
       name="Keys" 
       component={SelectScreen} 
       options={{ headerShown: false,
       tabBarIcon: ({ color, size }) => (
        <Ionicons name="musical-notes" size={size} color={color} />
       ),
      }}
   />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Thelonious" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ShowKeyScreen" component={ShowKeyScreen} />
        <Stack.Screen name="Guitar Modes" component={ModesChartScreen} />
        <Stack.Screen name="Caged Chords" component={CagedScreen} />
        <Stack.Screen name="ProgScreen" component={ProgScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;