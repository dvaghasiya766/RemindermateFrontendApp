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
import { getFollowUpsByMonth } from '../Components/Function/APIs';
import { replace } from '../Navigations/NavigationServices';
import { Screens } from '../Utils/Const';
import { logOut } from '../Components/Function/handler';
import { formatDate } from './AddFollowUpScreen';

const CalendarViewScreen = () => {
  const isFocused = useIsFocused();
  const floatingButtonRef = useRef<null | { toggleMenu: () => void }>(null);
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
  const [selectedMonth, setSelectedMonth] = useState({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
  });
  const [followUps, setFollowUps] = useState([]);
  const [filteredFollowUps, setFilterFollowUps] = useState([]);

  const getMonthlyFollowUps = async () => {
    const response: any = await getFollowUpsByMonth({ ...selectedMonth });
    const data = response?.data;

    if (!data.success) {
      logOut();
      replace(Screens.SignInScreen);
      return;
    }

    setFollowUps(data.data);
  };

  useEffect(() => {
    if (!isFocused) {
      // Perform any actions needed when the screen is focused
      floatingButtonRef.current?.toggleMenu();
    } else {
      getMonthlyFollowUps();
    }
  }, [isFocused]);

  useEffect(() => {
    getMonthlyFollowUps();
  }, [selectedMonth]);

  const changeSelectedMonth = (month: DateData) => {
    setSelectedMonth({ month: month.month, year: month.year });
  };

  useEffect(() => {
    if (followUps.length !== 0 && selectedDate) {
      const dataFollowUps = followUps.filter(f => {
        const followUpDate = new Date(f.date).toISOString().split('T')[0];
        return followUpDate === selectedDate;
      });

      setFilterFollowUps(dataFollowUps[0]?.followups ?? []);
    }
  }, [selectedDate, followUps]); // runs automatically whenever selectedDate changes

  const changeSelectedDate = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.rootContainer}>
      {followUps.length !== 0 && (
        <>
          <Calender
            followUps={followUps}
            selectedDate={selectedDate}
            onDayPress={changeSelectedDate}
            onMonthChange={changeSelectedMonth}
          />
          <View
            style={{ marginHorizontal: 10, marginBottom: 3, marginTop: 15 }}
          >
            <Title>FollowUps</Title>
          </View>
          <FlatList
            renderItem={itemData => (
              <MyAgenda
                id={itemData.item.task_id}
                title={itemData.item.title}
                desc={itemData.item.description}
                time={itemData.item.time}
                status={itemData.item.status}
                reciverColor={itemData.item.color}
              />
            )}
            data={filteredFollowUps}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
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
