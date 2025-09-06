import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../Utils/Colors';
import { Fonts } from '../../../Utils/Fonts';
import { widthPx } from '../../../Utils/Responsive';

interface CustomColoredButtonProps {
  title: string;
  bgColor: string;
  children: React.ReactNode;
  style?: any;
  onPress: () => void;
}

const CustomColoredButton = ({
  title,
  bgColor,
  children,
  style,
  onPress,
}: CustomColoredButtonProps) => {
  return (
    <View
      style={[
        styles.outterContainer,
        { backgroundColor: bgColor, width: widthPx(40) },
        { ...style },
      ]}
    >
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.info }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.innerContainer}>
          {children}
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomColoredButton;

const styles = StyleSheet.create({
  outterContainer: {
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    overflow: 'hidden',
  },
  innerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
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
    opacity: 0.8,
  },
});
