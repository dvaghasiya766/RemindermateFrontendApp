import { Text, View } from 'react-native';
import React from 'react';
import FloatingButton from '../Components/UI/Calendar/FloatingButton';
import { Colors } from '../Utils/Colors';

const NotificationScreen = () => {
  return (
    <View>
      <Text>NotificationScreen</Text>
      <FloatingButton bgColor={Colors.orange} />
    </View>
  );
};

export default NotificationScreen;

// const styles = StyleSheet.create({});
