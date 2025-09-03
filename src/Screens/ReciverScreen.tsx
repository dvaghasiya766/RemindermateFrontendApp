import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import MyRecivers from '../Components/UI/Calendar/MyRecivers';
import FloatingButton from '../Components/UI/Calendar/FloatingButton';
import { Colors } from '../Utils/Colors';

const dummy_data = [
  { color: '#f00', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#0f0', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#00f', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#e05757ff', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#a125', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#003f00', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#f00f45', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#258f00', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#f40450', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#45f0f0', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#4f0fe0', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#ff30f0', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#130502', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#23adc4', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#23ff00', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#2af0f0', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#e05757', email: 'd@v.com', name: 'Dev Vaghasiya' },
  { color: '#4f0fe0', email: 'd@v.com', name: 'Dev Vaghasiya' },
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
      <FloatingButton
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
