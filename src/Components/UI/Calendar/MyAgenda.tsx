import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../Utils/Colors';
import CardTitle from '../Text/CardTitle';
import CardDesc from '../Text/CardDesc';
import CardTime from '../Text/CardTime';
import Ionicons from '@react-native-vector-icons/ionicons';
import IconButton from '../Buttons/IconButton';

interface MyAgendaProps {
  title: string;
  desc: string;
  time: string;
  // status: string;
}

const MyAgenda = ({ title, desc, time }: MyAgendaProps) => {
  return (
    <View style={[styles.rootContainer]}>
      <View style={styles.indecatorContainer}></View>
      <View style={styles.outerContainer}>
        <View style={styles.cardHeaderContainer}>
          <CardTitle>{title}</CardTitle>
          <CardTime>{time}</CardTime>
        </View>
        <CardDesc>{desc}</CardDesc>
        <View style={styles.cardFooterContainer}>
          <IconButton onPress={() => {}}>
            <Ionicons
              name="notifications-off"
              size={20}
              color={Colors.gray300}
            />
          </IconButton>
          <IconButton onPress={() => {}}>
            <Ionicons name="checkmark-done" size={20} color={Colors.gray300} />
          </IconButton>
          <View style={styles.status}></View>
        </View>
      </View>
    </View>
  );
};

export default MyAgenda;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.cardBlueBackground,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginVertical: 3,
    borderWidth: 2,
    borderColor: Colors.gray100,
    elevation: 4, // shadow on Android
    shadowColor: Colors.black, // shadow iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  indecatorContainer: {
    width: 6,
    height: '100%',
    backgroundColor: '#e05757ff',
    borderStartStartRadius: 1,
  },
  outerContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    overflow: 'hidden',
  },
  cardHeaderContainer: {
    paddingEnd: 2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    margin: 1,
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: Colors.warning,
  },
  cardFooterContainer: {
    paddingEnd: 3,
    paddingTop: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 0,
    gap: 15,
  },
});
