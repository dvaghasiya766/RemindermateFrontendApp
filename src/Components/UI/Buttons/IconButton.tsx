import { Pressable, StyleSheet, TextStyle, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../Utils/Colors';

interface IconButtonProps {
  onPress: () => void;
  style?: TextStyle;
  children: React.ReactNode;
}

export default function IconButton({
  onPress,
  style,
  children,
}: IconButtonProps) {
  return (
    <View style={[styles.outterContainer, style]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.gray200 }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View>{children}</View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outterContainer: {
    borderRadius: '50%',
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.7,
  },
});
