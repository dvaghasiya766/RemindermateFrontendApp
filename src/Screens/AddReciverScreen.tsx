import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { useRef, useState } from 'react';
import AppTextInput from '../Components/UI/Inputs/AppTextInput';
import { Colors } from '../Utils/Colors';
import ColorInputButton from '../Components/UI/Buttons/ColorInputButton';
import ColorInput from '../Components/UI/Inputs/ColorInput';
import PrimaryButton from '../Components/UI/Buttons/PrimaryButton';
import { addReceiverAPIcm } from '../Components/Function/APIs';
import { goBack, navigate, replace } from '../Navigations/NavigationServices';
import { Screens } from '../Utils/Const';

const AddReciverScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(Colors.gradientPurpleDark);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');

  const emailRef = useRef<TextInput>(null);
  const nameRef = useRef<TextInput>(null);

  const addReciverHandler = async () => {
    if (enteredEmail.trim() === '' || enteredName.trim() === '') {
      Alert.alert('Missing Fields', 'Please enter both email and name.', [
        { text: 'OK' },
      ]);
      return;
    }

    const receiverData = {
      color: selectedColor,
      name: enteredName,
      email: enteredEmail,
    };

    const response: any = await addReceiverAPIcm(receiverData);
    const data = response.data;

    if (data.errors) {
      let errorText = Object.entries(data.errors as Record<string, string[]>)
        .map(([field, messages]) => messages.join('\n'))
        .join('\n');

      Alert.alert(`Error`, errorText, [{ text: 'OK' }]);
      return;
    }

    if (!data.success) {
      let errorText = data.message;

      Alert.alert(`Error`, errorText, [{ text: 'OK' }]);
      return;
    }
    console.log('success');
    goBack();
  };

  return (
    <View style={styles.rootContainer}>
      <ColorInputButton
        color={selectedColor}
        onPress={() => {
          setShowModal(true);
        }}
      />
      <AppTextInput
        ref={nameRef}
        setEnteredText={setEnteredName}
        label="Set Receiver Name"
        autoCapitalize="words"
        autoCorrect={true}
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current?.focus()}
      />
      <AppTextInput
        ref={emailRef}
        setEnteredText={setEnteredEmail}
        label="Enter Receiver Email"
        autoComplete="email" // or "off", "name", "password" etc. (as needed)
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="done"
        autoCorrect={false}
        onSubmitEditing={addReciverHandler} // 👈 jump to Name
      />
      <ColorInput
        showModal={showModal}
        setShowModal={setShowModal}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <PrimaryButton title="Add Now" onPress={addReciverHandler} />
    </View>
  );
};

export default AddReciverScreen;

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
