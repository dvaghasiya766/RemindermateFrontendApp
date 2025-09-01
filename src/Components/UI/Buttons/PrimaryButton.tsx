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

interface PrimaryButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export default function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <View style={[styles.outterContainer, { width: '100%' }]}>
      <Pressable
        onPress={onPress}
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
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    overflow: 'hidden',
  },
  innerContainer: { paddingVertical: 12, paddingHorizontal: 24 },
  text: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: Fonts.medium,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  pressed: {
    backgroundColor: Colors.gradientBlueDark,
  },
});

{
  /* <PrimaryButton
  title="Sign in with Facebook"
  onPress={() =>
    Alert.alert(
      "Forbidden 403!",
      "Currently Not Available this Functionality..."
    )
  }
/>; */
}
