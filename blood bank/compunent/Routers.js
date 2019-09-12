import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import bank from "./bank";
import requests from "./requests";
import viewdonors from "./viewdonors";
import donor from "./donor";
import post from "./post";
import view from "./view";

const AppNavigator = createStackNavigator({
    Home, bank, requests, viewdonors, donor, post, view,
},
    { initialRouteName: "Home" });

const AuthNavigator = createStackNavigator({
    Signup, Signin
},
    { initialRouteName: "Signup" });

export default createAppContainer(createSwitchNavigator(
    {
        App: AppNavigator,
        Auth: AuthNavigator,
    },
    { initialRouteName: "Auth" }
))
