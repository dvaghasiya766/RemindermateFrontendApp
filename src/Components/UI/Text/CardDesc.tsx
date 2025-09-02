import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CommonStylesFn } from '../../../Utils/CommonStyles';
import { Colors } from '../../../Utils/Colors';
import { Fonts } from '../../../Utils/Fonts';

interface CardDescProps {
  children: React.ReactNode;
  style?: any;
}

const CardDesc = ({ children, style }: CardDescProps) => {
  return <Text style={[styles.desc, style]}>{children}</Text>;
};

export default CardDesc;

const styles = StyleSheet.create({
  desc: {
    ...CommonStylesFn.text(3, Colors.gray500, Fonts.medium),
    marginTop: 5,
  },
});
