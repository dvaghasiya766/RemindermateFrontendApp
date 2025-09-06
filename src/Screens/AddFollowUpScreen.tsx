import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useRef, useState } from 'react';
import AppTextInput from '../Components/UI/Inputs/AppTextInput';
import PrimaryButton from '../Components/UI/Buttons/PrimaryButton';
import { Colors } from '../Utils/Colors';
import DatePicker from 'react-native-date-picker';
import CustomColoredButton from '../Components/UI/Buttons/CustomColoredButton';
import Ionicons from '@react-native-vector-icons/ionicons';
import { widthPx } from '../Utils/Responsive';
import SelectReceiver from '../Components/UI/Inputs/SelectReceiver';
import { addNewFollowUpAPIcm } from '../Components/Function/APIs';
import { replace } from '../Navigations/NavigationServices';
import { Screens } from '../Utils/Const';

const formatTime = (date: Date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = '00'; // if you don't collect seconds, set default

  return `${hours}:${minutes}:${seconds}`;
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const AddFollowUpScreen = () => {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showRecivers, setShowReciver] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [selectedReciver, setSelectedReciver] = useState({
    receiver_id: 0,
    color: Colors.gradientGray,
    name: '',
    email: '',
  });
  const [enteredDetails, setEnteredDetails] = useState('');
  const [enteredTitle, setEnteredTitle] = useState('');

  const detailsRef = useRef<TextInput>(null);
  const titleRef = useRef<TextInput>(null);

  const addNewFollowUp = async () => {
    if (!enteredDetails || !enteredTitle || !selectedReciver.receiver_id) {
      Alert.alert('Require', 'Please fill all the fields', [{ text: 'OK' }]);
      return;
    }

    const newFollowUp = {
      title: enteredTitle.trim(),
      description: enteredDetails.trim(),
      time: formatTime(time), // ✅ "HH:MM:SS"
      date: formatDate(date), // or formatted date string
      receiver_id: selectedReciver.receiver_id,
    };

    const response: any = await addNewFollowUpAPIcm(newFollowUp);
    const data = response.data;

    if (!data.success) {
      let errorText = Object.entries(data.errors as Record<string, string[]>)
        .map(([field, messages]) => messages.join('\n'))
        .join('\n');

      Alert.alert(`Error`, errorText, [{ text: 'OK' }]);
      return;
    }

    Alert.alert('Success', 'FollowUp added successfully', [{ text: 'OK' }]);

    // Optionally reset form
    setEnteredTitle('');
    setEnteredDetails('');
    setTime(new Date());
    setDate(new Date());
    setSelectedReciver({
      receiver_id: 0,
      color: Colors.gradientGray,
      name: '',
      email: '',
    });

    replace(Screens.ViewFollowUpScreen, { id: data.data.task_id });
  };
  return (
    <View style={styles.rootContainer}>
      <CustomColoredButton
        title={selectedReciver.name}
        bgColor={selectedReciver.color}
        children={<Ionicons name="person" size={20} color="#fff" />}
        style={{ width: '100%', marginBottom: 10 }}
        onPress={() => setShowReciver(true)}
      />
      <View
        style={{
          paddingHorizontal: 30,
          width: widthPx(100),
          flexDirection: 'row',
          justifyContent: 'space-around',
          // marginBottom: 0,
        }}
      >
        <CustomColoredButton
          title="Date"
          bgColor={Colors.gradientPinkDark}
          children={<Ionicons name="calendar" size={20} color="#fff" />}
          style={{ width: '130' }}
          onPress={() => setShowDate(true)}
        />
        <CustomColoredButton
          title="Time"
          bgColor={Colors.gradientPink}
          children={<Ionicons name="time" size={20} color="#fff" />}
          style={{ width: '130' }}
          onPress={() => setShowTime(true)}
        />
      </View>
      <AppTextInput
        ref={titleRef}
        setEnteredText={setEnteredTitle}
        label="Set FollowUp Title"
        autoCapitalize="words"
        autoCorrect={true}
        cursorColor={Colors.primary}
        returnKeyType="next"
        onSubmitEditing={() => detailsRef.current?.focus()}
        value={enteredTitle}
      />
      <AppTextInput
        ref={detailsRef}
        setEnteredText={setEnteredDetails}
        label="Enter FollowUp Details"
        autoCapitalize="sentences"
        autoCorrect={false}
        cursorColor={Colors.primary}
        returnKeyType="done"
        onSubmitEditing={addNewFollowUp} // 👈 jump to Name
        value={enteredDetails}
      />
      <DatePicker
        modal
        open={showDate}
        date={date}
        mode="date"
        onConfirm={selectedTime => {
          setShowDate(false);
          setDate(selectedTime);
          // console.log('Selected date:', selectedTime.toLocaleDateString());
        }}
        onCancel={() => setShowDate(false)}
      />
      <DatePicker
        modal
        open={showTime}
        date={time}
        mode="time"
        onConfirm={selectedTime => {
          setShowTime(false);
          setTime(selectedTime);
          // console.log('Selected time:', selectedTime.toLocaleTimeString());
        }}
        onCancel={() => setShowTime(false)}
      />
      <SelectReceiver
        showModal={showRecivers}
        setShowModal={setShowReciver}
        setSelectedReciver={setSelectedReciver}
      />
      <PrimaryButton title="Add Now" onPress={addNewFollowUp} />
    </View>
  );
};

export default AddFollowUpScreen;

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    paddingHorizontal: 40,
    paddingVertical: 30,
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});
