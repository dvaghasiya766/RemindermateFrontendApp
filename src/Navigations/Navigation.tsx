import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {
  CalendarViewScreen,
  FollowUpScreen,
  ForgetPasswordScreen,
  NotificationScreen,
  OTPScreen,
  ReciverScreen,
  SignInScreen,
  SignUpScreen,
} from '../Screens';
import { Screens } from '../Utils/Const';

export type RootStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  OTPScreen: undefined;
  ForgetPasswordScreen: undefined;
  BottomTab: undefined;
};

export type BottomTabParamList = {
  CalendarViewScreen: undefined;
  FollowUpScreen: undefined;
  ReciverScreen: undefined;
  NotificationScreen: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Screens.CalendarViewScreen}
        component={CalendarViewScreen}
      />
      <Tab.Screen name={Screens.FollowUpScreen} component={FollowUpScreen} />
      <Tab.Screen name={Screens.ReciverScreen} component={ReciverScreen} />
      <Tab.Screen
        name={Screens.NotificationScreen}
        component={NotificationScreen}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name={Screens.SignInScreen} component={SignInScreen} />
        <Stack.Screen name={Screens.SignUpScreen} component={SignUpScreen} />
        <Stack.Screen name={Screens.OTPScreen} component={OTPScreen} />
        <Stack.Screen
          name={Screens.ForgetPasswordScreen}
          component={ForgetPasswordScreen}
        />
        <Stack.Screen name={Screens.BottomTab} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
