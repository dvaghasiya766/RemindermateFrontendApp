import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  GestureResponderEvent,
  View,
} from 'react-native';
import { Colors } from '../../../Utils/Colors';
import { Fonts } from '../../../Utils/Fonts';
import { RootStackParamList } from '../../../Navigations/Navigation';
import { navigate } from '../../../Navigations/NavigationServices';

interface NavigateButtonProps {
  title: string;
  screen: keyof RootStackParamList;
  params?: any;
}

export default function NavigateButton({
  title,
  screen,
  params,
}: NavigateButtonProps) {
  const navigateTo = () => {
    navigate(screen, params);
  };

  return (
    <View style={[styles.outterContainer, { width: '100%' }]}>
      <Pressable
        onPress={navigateTo}
        android_ripple={{ color: Colors.info }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outterContainer: {
    position: 'absolute',
    bottom: 20,
    marginVertical: 10,
    backgroundColor: Colors.gradientBlue,
    borderRadius: 30,
    overflow: 'hidden',
  },
  innerContainer: { paddingVertical: 12, paddingHorizontal: 24 },
  text: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: Fonts.medium,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.white,
    backgroundColor: 'transparent',
  },
  pressed: {
    backgroundColor: Colors.gradientBlueDark,
  },
});

{
  /* <NavigateButton
  title="Sign in with Facebook"
  onPress={() =>
    Alert.alert(
      "Forbidden 403!",
      "Currently Not Available this Functionality..."
    )
  }
/>; */
}
