import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import MyRecivers from '../Components/UI/Calendar/MyRecivers';
import FloatingButton from '../Components/UI/Calendar/FloatingButton';
import { Colors } from '../Utils/Colors';

const dummy_data = [
  { color: '#f00', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#0f0', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#00f', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#e05757ff', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#a125', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#003f00', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#f00f45', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#258f00', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#f40450', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#45f0f0', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#4f0fe0', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#ff30f0', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#130502', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#23adc4', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#23ff00', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#2af0f0', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#e05757', email: 'd@v.com', name: 'Dev Vaghasiua' },
  { color: '#4f0fe0', email: 'd@v.com', name: 'Dev Vaghasiua' },
];

const ReciverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      {/* <View style={{ marginHorizontal: 10, marginVertical: 8 }}>
        <Title>My Recivers</Title>
      </View> */}
      <FlatList
        renderItem={itemData => (
          <MyRecivers
            color={itemData.item.color}
            email={itemData.item.email}
            name={itemData.item.name}
          />
        )}
        data={dummy_data}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton bgColor={Colors.accent} />
    </View>
  );
};

export default ReciverScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, backgroundColor: Colors.white },
});
