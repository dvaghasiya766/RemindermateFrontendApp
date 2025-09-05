import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CommonStylesFn } from '../../Utils/CommonStyles';
import { Colors } from '../../Utils/Colors';
import { Fonts } from '../../Utils/Fonts';
import { moderateScale } from '../../Utils/Responsive';
import IconButton from './Buttons/IconButton';
import Ionicons from '@react-native-vector-icons/ionicons';

const Avatar = ({
  name,
  color,
  onPress,
}: {
  name: string;
  color: string;
  onPress: () => void;
}) => {
  return (
    <View style={[styles.avatarContainer, , { backgroundColor: color }]}>
      <Text style={{ ...CommonStylesFn.text(10, Colors.white, Fonts.medium) }}>
        {name[0].toLocaleUpperCase()}
      </Text>
      <IconButton onPress={() => {}} style={styles.buttonStyle}>
        <Ionicons name="pencil" size={17} color={Colors.white} />
      </IconButton>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatarContainer: {
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 30,
    width: 30,
    padding: 7,
    backgroundColor: Colors.black,
  },
});
