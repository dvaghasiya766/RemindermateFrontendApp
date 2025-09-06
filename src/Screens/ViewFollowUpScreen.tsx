import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigations/Navigation';
import { widthPx } from '../Utils/Responsive';
import { Colors } from '../Utils/Colors';
import MyRecivers from '../Components/UI/Calendar/MyRecivers';
import {
  deleteFollowUp,
  fetchReceiverAPIcm,
  getFollowUpsByFollowUpId,
} from '../Components/Function/APIs';
import { goBack, replace } from '../Navigations/NavigationServices';
import CustomColoredButton from '../Components/UI/Buttons/CustomColoredButton';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Screens } from '../Utils/Const';

type Props = NativeStackScreenProps<RootStackParamList>;

const ViewFollowUpScreen = ({ route }: Props) => {
  const { id }: { id?: number } = route.params ?? { id: 0 };
  const [followUps, setFollowUps] = useState<any>();

  useEffect(() => {
    if (id) {
      getFollowUps();
    } else {
      goBack();
    }
  }, []);

  const getFollowUps = async () => {
    const response: any = await getFollowUpsByFollowUpId(id);

    const data = response.data;
    if (!data.success) {
      goBack();
      return;
    }

    setFollowUps(data.data);
  };

  const deleteFollowUpHandler = async () => {
    const response: any = await deleteFollowUp(followUps.task_id);
    const data = response.data;

    console.log(data);
    if (!data.success) {
      goBack();
      return;
    }

    replace(Screens.BottomTab);
  };

  return (
    <View style={styles.rootContainer}>
      {followUps && (
        <View
          style={{
            flex: 1,
            maxHeight: 60,
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            paddingHorizontal: 20,
          }}
        >
          <CustomColoredButton
            title="Delete"
            bgColor={Colors.danger}
            children={<Ionicons name="trash-bin" size={20} color="#fff" />}
            onPress={() => {
              deleteFollowUpHandler();
            }}
          />
        </View>
      )}
      {followUps && (
        <View style={{ height: 80 }}>
          <MyRecivers
            id={followUps.r_id}
            color={followUps.color}
            email={followUps.email}
            name={followUps.name}
          />
        </View>
      )}
    </View>
  );
};

export default ViewFollowUpScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  outerContainer: {
    flex: 1,
    width: widthPx(100),
    alignItems: 'center',
    paddingTop: 20,
  },
});
