import { useState } from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ColorPicker, {
  HueSlider,
  OpacitySlider,
  Panel1,
  Preview,
  Swatches,
} from 'reanimated-color-picker';

interface ColorInputProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  selectedColor: string;
  setSelectedColor: (value: string) => void;
}

export default function ColorInput({
  showModal,
  setShowModal,
  selectedColor,
  setSelectedColor,
}: ColorInputProps) {
  const onSelectColor = ({ hex }: { hex: string }) => {
    setSelectedColor(hex);
  };

  return (
    <Modal visible={showModal} animationType="fade" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Pick a Color</Text>

          <ColorPicker
            style={{ width: '100%' }}
            value={selectedColor}
            onComplete={onSelectColor}
          >
            <Preview />
            <Panel1 />
            <HueSlider />
            <OpacitySlider />
            <Swatches />
          </ColorPicker>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.closeButton]}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#2ecc71',
  },
  closeButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
