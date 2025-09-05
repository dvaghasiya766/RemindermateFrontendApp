import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useIsFocused } from '@react-navigation/native';
import MyRecivers from '../Components/UI/Calendar/MyRecivers';
import FloatingButton from '../Components/UI/Calendar/FloatingButton';
import { Colors } from '../Utils/Colors';
import { DUMMY_RECIVERS } from '../Data/dummy_data';

const recivers = DUMMY_RECIVERS.filter(reciver => reciver.creatorId === 10);
// console.log('Recivers List:', recivers);

const ReciverScreen = () => {
  const isFocused = useIsFocused();
  const floatingButtonRef = useRef<null | { toggleMenu: () => void }>(null);

  useEffect(() => {
    if (!isFocused) {
      // Perform any actions needed when the screen is focused
      // console.log('FollowUpScreen is focused');
      floatingButtonRef.current?.toggleMenu();
    }
  }, [isFocused]);

  return (
    <View style={styles.rootContainer}>
      <FlatList
        renderItem={itemData => (
          <MyRecivers
            color={itemData.item.color}
            email={itemData.item.email}
            name={itemData.item.name}
          />
        )}
        data={recivers}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton
        ref={floatingButtonRef}
        bgColor={Colors.accent}
        secondaryColor={Colors.accentBackground}
        iconColor={Colors.accent}
      />
    </View>
  );
};

export default ReciverScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, backgroundColor: Colors.white },
});
