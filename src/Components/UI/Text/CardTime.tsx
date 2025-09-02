import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CommonStylesFn } from '../../../Utils/CommonStyles';
import { Colors } from '../../../Utils/Colors';
import { Fonts } from '../../../Utils/Fonts';

interface CardTimeProps {
  children: React.ReactNode;
}

const CardTime = ({ children }: CardTimeProps) => {
  return <Text style={styles.time}>{children}</Text>;
};

export default CardTime;

const styles = StyleSheet.create({
  time: {
    ...CommonStylesFn.text(3, Colors.gray300, Fonts.medium),
    marginTop: 2,
  },
});
