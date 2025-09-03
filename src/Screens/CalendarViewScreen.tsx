import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Calender from '../Components/UI/Calendar/Calender';
import { DateData } from 'react-native-calendars';
import MyAgenda from '../Components/UI/Calendar/MyAgenda';
import Title from '../Components/UI/Text/Title';
import { Colors } from '../Utils/Colors';
import FloatingButton from '../Components/UI/Calendar/FloatingButton';
import { DUMMY_FOLLOWUPS, DUMMY_RECIVERS } from '../Data/dummy_data';
import { useIsFocused } from '@react-navigation/core';

const CalendarViewScreen = () => {
  const isFocused = useIsFocused();
  const floatingButtonRef = useRef<null | { toggleMenu: () => void }>(null);

  useEffect(() => {
    if (!isFocused) {
      // Perform any actions needed when the screen is focused
      console.log('FollowUpScreen is focused');
      floatingButtonRef.current?.toggleMenu();
    }
  }, [isFocused]);

  const [selectedDate, setSelectedDate] = useState(Date.toString());
  const changeSelectedDate = (day: DateData) => {
    setSelectedDate(day.dateString);
  };
  return (
    <View style={styles.rootContainer}>
      <Calender selectedDate={selectedDate} onDayPress={changeSelectedDate} />
      <View style={{ marginHorizontal: 10, marginBottom: 3, marginTop: 15 }}>
        <Title>FollowUps</Title>
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
        data={DUMMY_FOLLOWUPS}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton
        ref={floatingButtonRef}
        bgColor={Colors.primary}
        iconColor={Colors.primary}
        secondaryColor={Colors.blueBackground}
      />
    </View>
  );
};

export default CalendarViewScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, backgroundColor: Colors.white },
});
