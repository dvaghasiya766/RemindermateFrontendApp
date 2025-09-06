import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useRef, useState } from 'react';
import ReactNativeModal from 'react-native-modal';
import Title from '../Text/Title';
import ColorInputButton from '../Buttons/ColorInputButton';
import AppTextInput from './AppTextInput';
import ColorInput from './ColorInput';
import PrimaryButton from '../Buttons/PrimaryButton';
import { updateReceiverAPIcm } from '../../Function/APIs';

interface UpdateReciverModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  receiverPrevData: any;
  setReceiverData: (x: object) => void;
}

const UpdateReciverModal = ({
  showModal,
  setShowModal,
  receiverPrevData,
  setReceiverData,
}: UpdateReciverModalProps) => {
  const [showColorModal, setColorModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(receiverPrevData.color);
  const [enteredEmail, setEnteredEmail] = useState(receiverPrevData.email);
  const [enteredName, setEnteredName] = useState(receiverPrevData.name);

  const emailRef = useRef<TextInput>(null);
  const nameRef = useRef<TextInput>(null);

  const updateReceiverHandler = async () => {
    if (enteredEmail.trim().length === 0 || enteredName.trim().length === 0) {
      return;
    }

    const receiverData = {
      id: receiverPrevData.receiver_id,
      name: enteredName,
      email: enteredEmail,
      color: selectedColor,
    };

    const response: any = await updateReceiverAPIcm(receiverData);
    const data = response.data;

    if (!data.success) {
      let errorText = Object.entries(data.errors as Record<string, string[]>)
        .map(([field, messages]) => messages.join('\n'))
        .join('\n');

      Alert.alert(`Error`, errorText, [{ text: 'OK' }]);
      return;
    }
    setReceiverData(receiverData);
    setShowModal(false);
  };

  return (
    <ReactNativeModal
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      isVisible={showModal}
      style={styles.modalContainer}
      onBackdropPress={() => setShowModal(false)}
      useNativeDriverForBackdrop={true}
    >
      <View style={{ marginBottom: 20 }}>
        <Title>Update Details</Title>
      </View>
      <ColorInputButton
        color={selectedColor}
        onPress={() => {
          setColorModal(true);
        }}
      />
      <AppTextInput
        ref={nameRef}
        isFilled
        setEnteredText={setEnteredName}
        label="Set Receiver Name"
        autoCapitalize="words"
        autoCorrect={true}
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current?.focus()}
        value={enteredName}
      />
      <AppTextInput
        ref={emailRef}
        isFilled
        setEnteredText={setEnteredEmail}
        label="Enter Receiver Email"
        autoComplete="email" // or "off", "name", "password" etc. (as needed)
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="done"
        autoCorrect={false}
        onSubmitEditing={updateReceiverHandler} // 👈 jump to Name
        value={enteredEmail}
      />
      <ColorInput
        showModal={showColorModal}
        setShowModal={setColorModal}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <PrimaryButton title="Update Now" onPress={updateReceiverHandler} />
    </ReactNativeModal>
  );
};

export default UpdateReciverModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
});
