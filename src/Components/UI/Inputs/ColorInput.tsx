import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ColorPicker, {
  Panel1,
  HueSlider,
  Preview,
  OpacitySlider,
} from 'reanimated-color-picker';
import ReactNativeModal from 'react-native-modal';
import { runOnJS } from 'react-native-reanimated';

interface ColorInputProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  selectedColor: string;
  setSelectedColor: (value: string) => void;
}

const ColorInput: React.FC<ColorInputProps> = ({
  showModal,
  setShowModal,
  selectedColor,
  setSelectedColor,
}) => {
  // wrapped in worklet-safe callback
  const onSelectColor = (color: { hex: string }) => {
    'worklet';
    runOnJS(setSelectedColor)(color.hex);
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
      <Text style={styles.title}>Pick a Color</Text>

      <ColorPicker
        value={selectedColor}
        onComplete={onSelectColor}
        style={{ width: '100%' }}
      >
        <Preview style={styles.preview} />
        <Panel1 style={styles.panel} />
        <HueSlider style={styles.slider} />
        <OpacitySlider style={styles.slider} />
      </ColorPicker>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ccc' }]}
          onPress={() => setShowModal(false)}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: selectedColor }]}
          onPress={() => setShowModal(false)}
        >
          <Text style={[styles.buttonText, { color: '#fff' }]}>Select</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  );
};

export default ColorInput;

const styles = StyleSheet.create({
  modalContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  preview: {
    marginBottom: 12,
    height: 50,
    borderRadius: 8,
  },
  panel: {
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
    height: 200,
  },
  slider: {
    marginBottom: 16,
    width: '100%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
