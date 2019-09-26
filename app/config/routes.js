import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/Home";
import CurrencyList from "../screens/CurrencyList";

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title
      })
    }
  })
);
