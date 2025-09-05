import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../Utils/Colors';
import { Fonts } from '../../../Utils/Fonts';
import { heightPx, moderateScale } from '../../../Utils/Responsive';

interface ColorInputButtonProps {
  // title: string;
  color: string;
  onPress: () => void;
}

const ColorInputButton = ({ color, onPress }: ColorInputButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: Colors.info }}
      style={({ pressed }) =>
        !pressed
          ? [styles.outterContainer, { width: '100%', backgroundColor: color }]
          : [
              styles.outterContainer,
              { width: '100%', backgroundColor: color },
              styles.pressed,
            ]
      }
    ></Pressable>
  );
};

export default ColorInputButton;

const styles = StyleSheet.create({
  outterContainer: {
    marginBottom: 10,
    borderRadius: 30,
    overflow: 'hidden',
    height: 50,
    borderWidth: 3,
    borderColor: Colors.gray100,
  },
  pressed: {
    opacity: 0.8,
  },
});
