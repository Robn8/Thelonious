import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/Screens/HomeScreen';
import TheoryScreen from './src/Screens/TheoryScreen';
import KeyScreen from './src/Screens/KeyScreen';

const tabNavigator = createBottomTabNavigator({
  Theory: {
    screen: TheoryScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Keys: {
    screen: KeyScreen,
  },
});

export default createAppContainer(tabNavigator);
