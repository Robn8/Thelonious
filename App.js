import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/Screens/HomeScreen';
import theoryScreen from './src/Screens/TheoryScreen';

const tabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Theory: theoryScreen,
});

export default createAppContainer(tabNavigator);
