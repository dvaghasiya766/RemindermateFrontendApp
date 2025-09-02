import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CommonStylesFn } from '../../../Utils/CommonStyles';
import { Colors } from '../../../Utils/Colors';
import { Fonts } from '../../../Utils/Fonts';

interface CardTitleProps {
  children: React.ReactNode;
}

const CardTitle = ({ children }: CardTitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default CardTitle;

const styles = StyleSheet.create({
  title: {
    ...CommonStylesFn.text(4.5, Colors.gray500, Fonts.semiBold),
  },
});
