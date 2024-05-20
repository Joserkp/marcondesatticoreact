import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from "../../pages/SignIn";
import { Signup } from "../../pages/SignUp";

const Auth = createStackNavigator();
export const AuthRoutes: React.FunctionComponent = () => {
    return (
        <Auth.Navigator>
            <Auth.Screen name="SigIn" component={SignIn}></Auth.Screen>
            <Auth.Screen name="SigUp" component={Signup}></Auth.Screen>
        </Auth.Navigator>
    );
}