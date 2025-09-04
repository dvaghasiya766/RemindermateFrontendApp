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
import { Colors, statusGradients } from '../Utils/Colors';
import Title from '../Components/UI/Text/Title';
import PrimaryButton from '../Components/UI/Buttons/PrimaryButton';
import OTPTextView from 'react-native-otp-textinput';
import { Fonts } from '../Utils/Fonts';
import { replace } from '../Navigations/NavigationServices';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigations/Navigation';
import { Screens } from '../Utils/Const';
import {
  forgotPasswordOTPAPIcm,
  resendOtpAPIcm,
  verifyRegisterOtpAPIcm,
} from '../Components/Function/APIs';

type Props = NativeStackScreenProps<RootStackParamList>;

const OTPScreen = ({ route }: Props) => {
  const {
    mailId,
    useForActivation = false,
  }: { mailId?: string; useForActivation?: boolean } = route.params ?? {};

  const otpInputRef = useRef<OTPTextView>(null);
  const [otp, setOtp] = React.useState('');
  // console.log(otpInputRef);

  const resendOtp = () => {
    const response: any = resendOtpAPIcm({ email: mailId });
    const data = response.data;

    if (!data.success) {
      Alert.alert('Invalid', data.message, [{ text: 'OK' }]);
    }
    Alert.alert('Success', data.message, [{ text: 'OK' }]);
  };

  const handleOTP = async () => {
    const otpData = {
      email: mailId,
      otp: otp,
    };

    if (useForActivation) {
      const response: any = await verifyRegisterOtpAPIcm(otpData);
      const data = response.data;

      if (!data.success) {
        Alert.alert('Invalid', data.message, [{ text: 'OK' }]);
        return;
      }
      console.log('OTP Verification Response:', data);
      replace(Screens.SignInScreen);
      return;
    }

    const response: any = await forgotPasswordOTPAPIcm(otpData);
    const data = response.data;

    if (!data.success) {
      Alert.alert('Invalid', data.message, [{ text: 'OK' }]);
      return;
    }

    console.log('OTP Verified', response);
    replace(Screens.ForgetPasswordScreen, { mailId: mailId });
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
            <OTPTextView
              ref={otpInputRef}
              inputCount={6}
              tintColor={Colors.primary} // active border
              offTintColor={Colors.gray500} // inactive border
              handleTextChange={o => setOtp(o)}
              autoFocus={true}
              textInputStyle={styles.otpInput}
              containerStyle={styles.otpContainer}
            />
          </View>
          <PrimaryButton title="Verify Now" onPress={handleOTP} />
          {useForActivation && (
            <Text onPress={resendOtp}>Resend OTP?</Text>
          )}{' '}
        </ScrollView>
      </View>
    </Gradient>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  otpContainer: {
    justifyContent: 'space-between',
  },
  otpInput: {
    borderRadius: 12,
    backgroundColor: Colors.white,
    width: 40,
    height: 45,
    paddingBottom: 5,
    borderWidth: 1.5,
    fontSize: 18,
    fontFamily: Fonts.medium,
    includeFontPadding: false,
  },
});
