import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import ReactNativeModal from 'react-native-modal';
import ColorPicker, {
  HueSlider,
  OpacitySlider,
  Panel1,
  Preview,
} from 'reanimated-color-picker';

interface AssignServiceModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  selectedColor: string;
  setSelectedColor: (value: string) => void;
}

const AssignServiceModal = ({
  showModal,
  setShowModal,
  selectedColor,
  setSelectedColor,
}: AssignServiceModalProps) => {
  const onSelectColor = ({ hex }: { hex: string }) => {
    setSelectedColor(hex);
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
      <View style={styles.backdrop}>
        <View style={styles.modalContainer}>
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
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default AssignServiceModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
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
  },
  slider: {
    marginBottom: 16,
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
