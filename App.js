import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/Screens/HomeScreen';


const tabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
});

export default createAppContainer(tabNavigator);
