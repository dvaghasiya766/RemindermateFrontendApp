import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Calender from '../Components/UI/Calendar/Calender';
import { DateData } from 'react-native-calendars';
import MyAgenda from '../Components/UI/Calendar/MyAgenda';
import Title from '../Components/UI/Text/Title';
import { Colors } from '../Utils/Colors';

export const dummy_data = [
  {
    title: 'FollowUp Title',
    description:
      'FollowUp Description is the task has been inclomplete and this is not neccesory task',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description: 'FollowUp Description is',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description: 'FollowUp Description is the task has been',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description: 'FollowUp Description is the task has been inclompletes',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description: 'FollowUp Description is the task has been inclompletes',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description:
      'FollowUp Description is the task has been inclomplete and this is not neccesory task',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description: 'FollowUp Description is',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description: 'FollowUp Description is the task has been',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description: 'FollowUp Description is the task has been inclompletes',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description: 'FollowUp Description is the task has been inclompletes',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description:
      'FollowUp Description is the task has been inclomplete and this is not neccesory task',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description: 'FollowUp Description is',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description: 'FollowUp Description is the task has been',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description: 'FollowUp Description is the task has been inclompletes',
    time: '9:00 AM',
  },
  {
    title: 'FollowUp Title',
    description: 'FollowUp Description is the task has been inclompletes',
    time: '9:00 AM',
  },
];

const CalendarViewScreen = () => {
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
          />
        )}
        data={dummy_data}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CalendarViewScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, backgroundColor: Colors.white },
});
