import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { Fonts } from '../../../Utils/Fonts';
import { Colors } from '../../../Utils/Colors';
import { CommonStylesFn } from '../../../Utils/CommonStyles';
import { navigate } from '../../../Navigations/NavigationServices';
import { RootStackParamList } from '../../../Navigations/Navigation';

interface ChangeStackTextProps {
  screen: keyof RootStackParamList;
  normalText?: any;
  navigateText: any;
  params?: any;
}

const ChangeStackText = ({
  screen,
  params,
  navigateText,
  normalText,
}: ChangeStackTextProps) => {
  const navigateTo = () => {
    navigate(screen, params);
  };
  return (
    <Text style={styles.normalText}>
      {normalText}{' '}
      <Text style={styles.navigateText} onPress={navigateTo}>
        {navigateText}
      </Text>
    </Text>
  );
};

export default ChangeStackText;

const styles = StyleSheet.create({
  normalText: {
    ...CommonStylesFn.text(3.5, Colors.gray400, Fonts.medium),
  },
  navigateText: {
    ...CommonStylesFn.text(3.5, Colors.primary, Fonts.medium),
  },
});
