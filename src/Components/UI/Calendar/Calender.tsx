import React from 'react';
import { Calendar, DateData } from 'react-native-calendars';
import { Colors } from '../../../Utils/Colors';
import { Fonts } from '../../../Utils/Fonts';

type CalendarProps = {
  selectedDate: string;
  followUps: any;
  onDayPress: (date: DateData) => void;
  onMonthChange: (month: DateData) => void;
};

const Calender = ({
  selectedDate,
  followUps,
  onDayPress,
  onMonthChange,
}: CalendarProps) => {
  const markedDates: { [key: string]: { marked: boolean } } = {};

  for (const followUp of followUps) {
    const date = new Date(followUp.date);
    const dateString = date.toISOString().split('T')[0];

    markedDates[dateString] = { marked: true };
  }

  return (
    <Calendar
      onDayPress={onDayPress}
      onMonthChange={onMonthChange}
      theme={{
        backgroundColor: Colors.blueBackground,
        calendarBackground: Colors.blueBackground,
        textSectionTitleColor: Colors.gray400, // days of week
        textSectionTitleDisabledColor: Colors.gray200,
        selectedDayBackgroundColor: Colors.gradientBlue,
        selectedDayTextColor: Colors.white,
        todayTextColor: Colors.white,
        todayBackgroundColor: Colors.primaryLight,
        dayTextColor: Colors.textPrimary,
        textDisabledColor: Colors.gray300,
        dotColor: Colors.orange,
        selectedDotColor: Colors.white,
        arrowColor: Colors.primary,
        disabledArrowColor: Colors.gray200,
        monthTextColor: Colors.primary,
        indicatorColor: Colors.primary,
        textDayFontSize: 16,
        textMonthFontSize: 18,
        textDayHeaderFontSize: 14,
        textDayFontFamily: Fonts.medium,
        textMonthFontFamily: Fonts.semiBold,
        textDayHeaderFontFamily: Fonts.regular,
      }}
      style={{
        borderRadius: 12,
        elevation: 4, // shadow on Android
        shadowColor: Colors.black, // shadow iOS
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        padding: 2,
        // margin: 10,
      }}
      markedDates={{
        ...markedDates,
        ...(selectedDate
          ? {
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: Colors.gradientBlue, // highlight color
              },
            }
          : {}),
      }}
    />
  );
};

export default Calender;
