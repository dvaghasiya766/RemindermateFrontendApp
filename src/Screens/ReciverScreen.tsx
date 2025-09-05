import { Alert, FlatList, StyleSheet, View } from 'react-native';
import React, { use, useEffect, useRef, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import MyRecivers from '../Components/UI/Calendar/MyRecivers';
import FloatingButton from '../Components/UI/Calendar/FloatingButton';
import { Colors } from '../Utils/Colors';
import { fetchReceiversAPIcm } from '../Components/Function/APIs';

const ReciverScreen = () => {
  const [receivers, setReceivers] = useState<object[]>([]);
  const isFocused = useIsFocused();
  const floatingButtonRef = useRef<null | { toggleMenu: () => void }>(null);

  useEffect(() => {
    if (!isFocused) {
      floatingButtonRef.current?.toggleMenu();
    } else {
      fetchReceivers();
    }
  }, [isFocused]);

  const fetchReceivers = async () => {
    const response: any = await fetchReceiversAPIcm();
    const data = response.data;

    if (!data.success) {
      let errorText = data.message;
      Alert.alert(`Error`, errorText, [{ text: 'OK' }]);
      return;
    }

    setReceivers(data.data);
    console.log(response);
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        renderItem={itemData => (
          <MyRecivers
            id={itemData.item.receiver_id}
            color={itemData.item.color}
            email={itemData.item.email}
            name={itemData.item.name}
          />
        )}
        data={receivers}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton
        ref={floatingButtonRef}
        bgColor={Colors.accent}
        secondaryColor={Colors.accentBackground}
        iconColor={Colors.accent}
      />
    </View>
  );
};

export default ReciverScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, backgroundColor: Colors.white },
});
