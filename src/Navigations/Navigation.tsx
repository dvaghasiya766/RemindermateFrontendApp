import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {
  AddFollowUpScreen,
  AddReciverScreen,
  CalendarViewScreen,
  FollowUpScreen,
  ForgetPasswordScreen,
  NotificationScreen,
  OTPScreen,
  ReciverScreen,
  SignInScreen,
  SignUpScreen,
  StartupScreen,
  ViewFollowUpScreen,
  ViewReciverScreen,
} from '../Screens';
import { Screens } from '../Utils/Const';
import { Colors, statusGradients } from '../Utils/Colors';
import { Fonts } from '../Utils/Fonts';
import { CommonStylesFn } from '../Utils/CommonStyles';
import Ionicons from '@react-native-vector-icons/ionicons';
import LinearGradient from 'react-native-linear-gradient';

export type RootStackParamList = {
  StartupScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  OTPScreen: { mailId: string; useForActivation: boolean };
  ForgetPasswordScreen: { mailId: string | undefined };
  BottomTab: undefined;
  CalendarViewScreen: undefined;
  FollowUpScreen: undefined;
  ReciverScreen: undefined;
  NotificationScreen: undefined;
  AddFollowUpScreen: undefined;
  AddReciverScreen: undefined;
  ViewFollowUpScreen: undefined;
  ViewReciverScreen: undefined;
};

export type BottomTabParamList = {
  CalendarViewScreen: undefined;
  FollowUpScreen: undefined;
  ReciverScreen: undefined;
  NotificationScreen: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // animation: 'fade',
        sceneStyle: { height: 200 },
        tabBarLabelStyle: { fontSize: 11 },
        tabBarInactiveTintColor: Colors.gray300,
      }}
    >
      <Tab.Screen
        name={Screens.CalendarViewScreen}
        component={CalendarViewScreen}
        options={{
          title: 'Calendar View',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            ...CommonStylesFn.text(6, Colors.white, Fonts.medium),
          },
          headerStyle: { backgroundColor: Colors.primary },
          tabBarLabel: 'Dashboard',
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.gray300,
          tabBarStyle: {
            backgroundColor: Colors.blueBackground,
            height: 75, // force tab bar height
            paddingTop: 5, // space above icon
          },
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={'calendar'} // filled vs normal
              size={23}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.FollowUpScreen}
        component={FollowUpScreen}
        options={{
          title: 'Follow Ups',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            ...CommonStylesFn.text(6, Colors.white, Fonts.medium),
          },
          headerStyle: { backgroundColor: Colors.gradientGreen },
          tabBarLabel: 'FollowUp',
          tabBarActiveTintColor: Colors.gradientGreen,
          tabBarInactiveTintColor: Colors.gray300,
          tabBarStyle: {
            backgroundColor: Colors.greenBackground,
            height: 75, // force tab bar height
            paddingTop: 5, // space above icon
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={'list'} // filled vs normal
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.ReciverScreen}
        component={ReciverScreen}
        options={{
          title: 'Recivers',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            ...CommonStylesFn.text(6, Colors.white, Fonts.medium),
          },
          headerStyle: { backgroundColor: Colors.accent },
          tabBarLabel: 'Recivers',
          tabBarActiveTintColor: Colors.accent,
          tabBarInactiveTintColor: Colors.gray300,
          tabBarStyle: {
            backgroundColor: Colors.accentBackground,
            height: 75, // force tab bar height
            paddingTop: 5, // space above icon
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={'people'} // filled vs normal
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.NotificationScreen}
        component={NotificationScreen}
        options={{
          title: 'Settings',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            ...CommonStylesFn.text(6, Colors.white, Fonts.medium),
          },
          headerStyle: { backgroundColor: Colors.orange },
          tabBarLabel: 'Settings',
          tabBarActiveTintColor: Colors.orange,
          tabBarInactiveTintColor: Colors.gray300,
          tabBarStyle: {
            backgroundColor: Colors.orangeBackground,
            height: 75, // force tab bar height
            paddingTop: 5, // space above icon
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={'settings'} // filled vs normal
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      >
        <Stack.Screen name={Screens.StartupScreen} component={StartupScreen} />
        <Stack.Screen name={Screens.SignInScreen} component={SignInScreen} />
        <Stack.Screen name={Screens.SignUpScreen} component={SignUpScreen} />
        <Stack.Screen name={Screens.OTPScreen} component={OTPScreen} />
        <Stack.Screen
          name={Screens.ForgetPasswordScreen}
          component={ForgetPasswordScreen}
        />
        <Stack.Screen name={Screens.BottomTab} component={BottomTab} />
        <Stack.Screen
          name={Screens.AddFollowUpScreen}
          component={AddFollowUpScreen}
          options={{
            headerShown: true,
            title: 'Add New Follow-Up', // 👈 friendlier title
            headerBackground: () => (
              <LinearGradient
                colors={statusGradients.FollowUp}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            ),
            headerShadowVisible: true,
            headerTitleStyle: {
              ...CommonStylesFn.text(6, Colors.white, Fonts.medium),
            },
            headerTintColor: Colors.white, // 👈 makes back button white
          }}
        />
        <Stack.Screen
          name={Screens.AddReciverScreen}
          component={AddReciverScreen}
          options={{
            headerShown: true,
            title: 'Add New Reciver', // 👈 friendlier title
            headerBackground: () => (
              <LinearGradient
                colors={statusGradients.Reciver}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            ),
            headerShadowVisible: false,
            // headerTitleAlign: 'center', // 👈 center the title
            headerTitleStyle: {
              ...CommonStylesFn.text(6, Colors.white, Fonts.medium),
              // letterSpacing: 1, // spacing for modern look
            },
            headerTintColor: Colors.white, // 👈 makes back button white
          }}
        />
        <Stack.Screen
          name={Screens.ViewFollowUpScreen}
          component={ViewFollowUpScreen}
          options={{
            headerShown: true,
            title: 'Follow Up', // 👈 friendlier title
            headerBackground: () => (
              <LinearGradient
                colors={statusGradients.FollowUp}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            ),
            headerShadowVisible: true,
            headerTitleStyle: {
              ...CommonStylesFn.text(6, Colors.white, Fonts.medium),
            },
            headerTintColor: Colors.white, // 👈 makes back button white
          }}
        />
        <Stack.Screen
          name={Screens.ViewReciverScreen}
          component={ViewReciverScreen}
          options={{
            headerShown: true,
            title: 'Reciver', // 👈 friendlier title
            headerBackground: () => (
              <LinearGradient
                colors={statusGradients.Reciver}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            ),
            headerShadowVisible: false,
            // headerTitleAlign: 'center', // 👈 center the title
            headerTitleStyle: {
              ...CommonStylesFn.text(6, Colors.white, Fonts.medium),
              // letterSpacing: 1, // spacing for modern look
            },
            headerTintColor: Colors.white, // 👈 makes back button white
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
