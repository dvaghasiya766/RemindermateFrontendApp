import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';
import { Colors } from '../../../Utils/Colors';
import CardTitle from '../Text/CardTitle';
import CardDesc from '../Text/CardDesc';
import CardTime from '../Text/CardTime';
import { navigate } from '../../../Navigations/NavigationServices';
import { Screens } from '../../../Utils/Const';

interface MyAgendaProps {
  title: string;
  desc: string;
  time?: string;
  status: 'Pending' | 'Completed' | 'Missed';
  reciverColor: string;
}

const MyAgenda = ({
  title,
  desc,
  time,
  status,
  reciverColor,
}: MyAgendaProps) => {
  // Pick color based on status
  const statusColor =
    status === 'Completed'
      ? Colors.gradientGreen
      : status === 'Missed'
      ? Colors.danger
      : Colors.warning;

  return (
    <Pressable
      style={styles.shadowWrapper}
      onPress={() => {
        navigate(Screens.ViewFollowUpScreen);
      }}
    >
      <View style={styles.rootContainer}>
        {/* Left Indicator */}
        <View
          style={[styles.indicatorContainer, { backgroundColor: reciverColor }]}
        />

        {/* Content */}
        <View style={styles.outerContainer}>
          {/* Header */}
          <View style={styles.cardHeaderContainer}>
            <CardTitle>{title}</CardTitle>
            {time && <CardTime>{time}</CardTime>}
          </View>

          {/* Description */}
          <CardDesc>{desc}</CardDesc>

          {/* Status Tag */}
          <View style={styles.footer}>
            <View
              style={[
                styles.statusChip,
                { backgroundColor: statusColor + '22' },
              ]}
            >
              <Text style={[styles.statusText, { color: statusColor }]}>
                {status}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MyAgenda;

const styles = StyleSheet.create({
  shadowWrapper: {
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 12,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: Colors.white, // needed for iOS shadow
  },
  rootContainer: {
    backgroundColor: Colors.cardBlueBackground,
    flexDirection: 'row',
    borderRadius: 12,
    overflow: 'hidden',
  },
  indicatorContainer: {
    width: 8,
    height: '100%',
  },
  outerContainer: {
    flex: 1,
    padding: 12,
  },
  cardHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  footer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  statusChip: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
