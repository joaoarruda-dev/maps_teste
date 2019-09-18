import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 // Version can be specified in package.json
import HomeView from "../view/HomeView";


const RootStack = createStackNavigator(
    {
        HomeView: {
            screen: HomeView
        },
    },
    {
        initialRouteName: "HomeView",
        headerMode: "none",
        navigationOptions: {
            headerVisible: true
        }
    }
);


const MainRouter = createAppContainer(RootStack);
export default MainRouter;