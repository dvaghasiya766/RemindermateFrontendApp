import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useRef } from 'react';
import Gradient from '../Components/UI/Gradient';
import { statusGradients } from '../Utils/Colors';
import Title from '../Components/UI/Text/Title';
import AppTextInput from '../Components/UI/Inputs/AppTextInput';
import PrimaryButton from '../Components/UI/Buttons/PrimaryButton';
import { replace } from '../Navigations/NavigationServices';
import { Screens } from '../Utils/Const';
import { RootStackParamList } from '../Navigations/Navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  forgotPasswordAPIcm,
  resetPasswordAPIcm,
} from '../Components/Function/APIs';

type Props = NativeStackScreenProps<RootStackParamList>;

const ForgetPasswordScreen = ({ route }: Props) => {
  const { mailId }: { mailId?: string } = route.params ?? {};

  const passwordRef = useRef<TextInput>(null);
  const repasswordRef = useRef<TextInput>(null);
  const [enteredEmail, setEnteredEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRePassword] = React.useState('');

  const handleRequestForOTP = async () => {
    if (!enteredEmail) {
      Alert.alert('Missing Fields', 'Please Enter Email Address.', [
        { text: 'OK' },
      ]);
      return;
    }

    const response: any = await forgotPasswordAPIcm({ email: enteredEmail });
    const data = response?.data;

    if (!data?.success) {
      Alert.alert('Invalid', data.message, [{ text: 'OK' }]);
      return;
    }

    Alert.alert('Success', data.message, [{ text: 'OK' }]);

    console.log('OTP Requested', response);
    replace(Screens.OTPScreen, {
      mailId: enteredEmail,
      useForActivation: false,
    });
  };

  const handleRequestForChangePassword = async () => {
    if (!password || !repassword) {
      Alert.alert('Missing Fields', 'Please both Fields.', [{ text: 'OK' }]);
      return;
    }

    const response: any = await resetPasswordAPIcm({
      email: mailId,
      password: password,
      confirm_password: repassword,
    });
    const data = response?.data;

    if (!data?.success) {
      Alert.alert('Invalid', data.message, [{ text: 'OK' }]);
      return;
    }
    Alert.alert('Success', data.message, [{ text: 'OK' }]);
    replace(Screens.SignInScreen);
  };

  return (
    <Gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={statusGradients.primary}
      style={styles.rootContainer}
    >
      <View style={styles.innerContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title>Forget Password</Title>
          <View style={styles.inputContainer}>
            {mailId ? (
              <>
                <AppTextInput
                  isPsw
                  ref={passwordRef}
                  setEnteredText={setPassword}
                  label="Create New Password"
                  returnKeyType="next"
                  onSubmitEditing={() => repasswordRef.current?.focus()}
                />
                <AppTextInput
                  isPsw
                  ref={repasswordRef}
                  setEnteredText={setRePassword}
                  label="Re-Enter Password"
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="send"
                  onSubmitEditing={handleRequestForChangePassword}
                />
              </>
            ) : (
              <AppTextInput
                // ref={emailRef}
                setEnteredText={setEnteredEmail}
                label="Enter Your Email"
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={handleRequestForOTP} // 👈 jump to Name
              />
            )}
          </View>
          <PrimaryButton
            title={mailId ? 'Reset Now' : 'Forget Now'}
            onPress={
              mailId ? handleRequestForChangePassword : handleRequestForOTP
            }
          />
        </ScrollView>
      </View>
    </Gradient>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    paddingHorizontal: 22,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginTop: 8,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
