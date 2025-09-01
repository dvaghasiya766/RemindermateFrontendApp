import React from 'react';
import { StyleSheet, ColorValue } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientTuple, statusGradients } from '../../Utils/Colors';

interface GradientButtonProps {
  colors: GradientTuple; // can be preset or tuple
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: any;
  children: React.ReactNode;
}

export default function Gradient({
  colors = statusGradients.primary,
  start = { x: 1, y: 0 },
  end = { x: 0, y: 0 },
  style,
  children,
}: GradientButtonProps) {
  return (
    <LinearGradient
      colors={colors}
      style={style ? [style, styles.button] : styles.button}
      start={start}
      end={end}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
