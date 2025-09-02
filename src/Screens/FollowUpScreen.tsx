import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import Title from '../Components/UI/Text/Title';
import MyAgenda from '../Components/UI/Calendar/MyAgenda';
import { Colors } from '../Utils/Colors';
import { dummy_data } from './CalendarViewScreen';
import FloatingButton from '../Components/UI/Calendar/FloatingButton';

const FollowUpScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={{ marginHorizontal: 10, marginVertical: 8 }}>
        <Title>Todays FollowUps</Title>
      </View>
      <FlatList
        renderItem={itemData => (
          <MyAgenda
            title={itemData.item.title}
            desc={itemData.item.description}
            time={itemData.item.time}
            status="Pending"
            reciverColor="#e05757ff"
          />
        )}
        data={dummy_data}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton bgColor={Colors.gradientGreen} />
    </View>
  );
};

export default FollowUpScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, backgroundColor: Colors.white },
});
