import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigations/Navigation';
import Avatar from '../Components/UI/Avatar';
import { widthPx } from '../Utils/Responsive';
import Title from '../Components/UI/Text/Title';
import { fetchReceiverAPIcm } from '../Components/Function/APIs';
import CardDesc from '../Components/UI/Text/CardDesc';
import { replace } from '../Navigations/NavigationServices';
import { Screens } from '../Utils/Const';
import MyAgenda from '../Components/UI/Calendar/MyAgenda';
import { Colors } from '../Utils/Colors';

type Props = NativeStackScreenProps<RootStackParamList>;

const ViewReciverScreen = ({ route }: Props) => {
  const { id }: { id?: number } = route.params ?? {};
  const [receiverData, setReceiverData] = useState<any>();
  const [followUps, setFollowUps] = useState([]);

  useEffect(() => {
    fetchDetailes();
    fetchFollowUps();
  }, [id]);

  const fetchDetailes = async () => {
    if (!id) {
      replace(Screens.ReciverScreen);
      return;
    }
    const response: any = await fetchReceiverAPIcm(id);
    const data = response.data;

    if (!data.success) {
      let errorText = data.message;
      Alert.alert(`Error`, errorText, [{ text: 'OK' }]);
      return;
    }

    setReceiverData(data.data);
    console.log(response);
  };

  const fetchFollowUps = async () => {};

  return (
    <View style={styles.rootContainer}>
      {receiverData && (
        <View style={styles.outerContainer}>
          <Avatar
            onPress={() => {}}
            color={receiverData.color}
            name={receiverData.name}
          />
          <Title>{receiverData.name}</Title>
          <CardDesc>{receiverData.email}</CardDesc>
        </View>
      )}
      <FlatList
        nestedScrollEnabled
        renderItem={itemData => (
          <MyAgenda
            title={itemData.item.title}
            desc={itemData.item.description}
            time={itemData.item.time}
            status={itemData.item.status}
            reciverColor={Colors.primary}
          />
        )}
        data={followUps}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ViewReciverScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1 },
  outerContainer: {
    flex: 1,
    width: widthPx(100),
    alignItems: 'center',
    paddingTop: 20,
  },
});
