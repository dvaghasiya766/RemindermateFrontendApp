import { StyleSheet, Text, View } from 'react-native';
import ColorInput from '../Components/UI/Inputs/ColorInput';
import { useState } from 'react';

const AddReciverScreen = () => {
  const [showModal, setShowModal] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string>('red');

  return (
    <View>
      <Text>AddReciverScreen</Text>
      <ColorInput
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </View>
  );
};

export default AddReciverScreen;

const styles = StyleSheet.create({});
