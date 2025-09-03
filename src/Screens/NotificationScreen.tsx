import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useIsFocused } from '@react-navigation/native';
import FloatingButton from '../Components/UI/Calendar/FloatingButton';
import { Colors } from '../Utils/Colors';

const NotificationScreen = () => {
  const isFocused = useIsFocused();
  const floatingButtonRef = useRef<null | { toggleMenu: () => void }>(null);

  useEffect(() => {
    if (!isFocused) {
      // Perform any actions needed when the screen is focused
      console.log('FollowUpScreen is focused');
      floatingButtonRef.current?.toggleMenu();
    }
  }, [isFocused]);

  return (
    <View style={styles.rootContainer}>
      <Text>NotificationScreen</Text>
      <FloatingButton
        ref={floatingButtonRef}
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
