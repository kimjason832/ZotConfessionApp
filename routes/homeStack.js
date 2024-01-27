import { createStackNavigator } from "@react-navigation/stack";
import { ScreenContainer } from "react-native-screens";

import Home from './App.js'
import Confessions from './Confessions.js'

const screens = {
    Home:{
        screen: Home
    },
    Confessions:{
        screen: Confessions
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

/*import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-native-screens";
import Home from '../App.js'
import Confessions from '../Confessions.js'


const screens = {
    Home:{
        screen: Home
    },
    Confessions:{
        screen: Confessions
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
*/
