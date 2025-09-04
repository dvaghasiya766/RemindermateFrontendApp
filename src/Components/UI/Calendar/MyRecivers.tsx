import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardTitle from '../Text/CardTitle';
import CardDesc from '../Text/CardDesc';
import { Colors } from '../../../Utils/Colors';
import { CommonStylesFn } from '../../../Utils/CommonStyles';
import { Fonts } from '../../../Utils/Fonts';
import { Screens } from '../../../Utils/Const';
import { navigate } from '../../../Navigations/NavigationServices';

interface MyReciversProps {
  name: string;
  email: string;
  color: string;
}

const MyRecivers = ({ name, email, color }: MyReciversProps) => {
  return (
    <Pressable
      style={styles.rootContainer}
      onPress={() => navigate(Screens.ViewReciverScreen)}
    >
      <View style={[styles.avatarContainer, , { backgroundColor: color }]}>
        <Text style={{ ...CommonStylesFn.text(4, Colors.white, Fonts.medium) }}>
          {name[0].toLocaleUpperCase()}
        </Text>
      </View>
      <View>
        <CardTitle>{name}</CardTitle>
        <CardDesc style={{ marginTop: 0 }}>{email}</CardDesc>
      </View>
    </Pressable>
  );
};

export default MyRecivers;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: 10,
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
});
