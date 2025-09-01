import React from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';
import { View } from 'react-native';

export type RootStackParamList = {
  Startup: undefined;
  Signin: undefined;
  VolunteerListing: {
    agencyId?: string;
    agencyName?: string;
  };
  QrCodeScannerScreen: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const Navigation = () => {
  return <View>Hello</View>;
  // const Stack = createNativeStackNavigator<RootStackParamList>();
  // return <NavigationContainer ref={navigationRef}></NavigationContainer>;
};

export default Navigation;
