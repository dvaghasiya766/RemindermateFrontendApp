import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FloatingButton from '../Components/UI/Calendar/FloatingButton';
import { Colors } from '../Utils/Colors';

const NotificationScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>NotificationScreen</Text>
      <FloatingButton
        bgColor={Colors.orange}
        iconColor={Colors.orange}
        secondaryColor={Colors.orangeBackground}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
