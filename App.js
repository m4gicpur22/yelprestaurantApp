import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from "./src/Screens/Screens";
import ResultsScreen from "./src/Screens/ResultsDisplay";

//creation of a stack naviagtor function which takes two parameters: 
//React object for navigation and default parameters object
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsScreen
  }, 
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);

//creates a react component out of the stack navigator function
export default createAppContainer(navigator);