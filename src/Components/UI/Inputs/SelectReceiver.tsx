import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import ReactNativeModal from 'react-native-modal';
import { fetchReceiversAPIcm } from '../../Function/APIs';
import { Colors } from '../../../Utils/Colors';
import MyRecivers from '../Calendar/MyRecivers';
import Title from '../Text/Title';

interface SelectReceiverProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  setSelectedReciver: (value: any) => void;
}

const SelectReceiver = ({
  showModal,
  setShowModal,
  setSelectedReciver,
}: SelectReceiverProps) => {
  const [receivers, setReceivers] = useState<object[]>([]);

  useEffect(() => {
    fetchReceivers();
  }, []);

  const fetchReceivers = async () => {
    const response: any = await fetchReceiversAPIcm();
    const data = response.data;
    // console.log(response);

    if (!data.success) {
      let errorText = data.message;
      Alert.alert(`Error`, errorText, [{ text: 'OK' }]);
      return;
    }

    setReceivers(data.data);
  };

  const onSelectReciver = (reciverDetails: any) => {
    setSelectedReciver(reciverDetails);
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
      <Title>Select Receiver</Title>
      <FlatList
        renderItem={itemData => (
          <MyRecivers
            id={itemData.item.receiver_id}
            color={itemData.item.color}
            email={itemData.item.email}
            name={itemData.item.name}
            onPress={() => {
              onSelectReciver(itemData.item);
            }}
          />
        )}
        data={receivers}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ccc' }]}
          onPress={() => setShowModal(false)}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  );
};

export default SelectReceiver;

const styles = StyleSheet.create({
  modalContainer: {
    // width: '85%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    // marginHorizontal: 10,
    marginVertical: 3,
    borderBottomWidth: 1,
    borderColor: Colors.gray100,
  },
  avatarContainer: {
    height: 40,
    width: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
