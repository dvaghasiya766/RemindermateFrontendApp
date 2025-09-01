import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '../../../Utils/Fonts';
import { Colors } from '../../../Utils/Colors';
import { CommonStylesFn } from '../../../Utils/CommonStyles';

interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    ...CommonStylesFn.text(6.5, Colors.gray500, Fonts.semiBold),
  },
});
