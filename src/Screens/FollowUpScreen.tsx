import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useIsFocused } from '@react-navigation/native';

import Title from '../Components/UI/Text/Title';
import MyAgenda from '../Components/UI/Calendar/MyAgenda';
import { Colors } from '../Utils/Colors';
import FloatingButton from '../Components/UI/Calendar/FloatingButton';
import { DUMMY_FOLLOWUPS, DUMMY_RECIVERS } from '../Data/dummy_data';

const followups = DUMMY_FOLLOWUPS;

const FollowUpScreen = () => {
  const isFocused = useIsFocused();
  const floatingButtonRef = useRef<null | { toggleMenu: () => void }>(null);

  useEffect(() => {
    if (!isFocused) {
      // Perform any actions needed when the screen is focused
      floatingButtonRef.current?.toggleMenu();
    }
  }, [isFocused]);

  return (
    <View style={styles.rootContainer}>
      <View style={{ marginHorizontal: 10, marginVertical: 8 }}>
        <Title>Todays FollowUps</Title>
      </View>
      <FlatList
        renderItem={itemData => (
          <MyAgenda
            title={itemData.item.title}
            desc={itemData.item.description}
            time={itemData.item.time}
            status={itemData.item.status}
            reciverColor={
              DUMMY_RECIVERS.find(r => r.creatorId === itemData.item.creatorId)
                ?.color || Colors.primary
            }
          />
        )}
        data={followups}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton
        ref={floatingButtonRef}
        bgColor={Colors.gradientGreen}
        secondaryColor={Colors.greenBackground}
        iconColor={Colors.gradientGreen}
        // setToClose={toClose}
      />
    </View>
  );
};

export default FollowUpScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, backgroundColor: Colors.white },
});
