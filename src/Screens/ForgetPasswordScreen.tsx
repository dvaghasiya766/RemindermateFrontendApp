import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useRef } from 'react';
import Gradient from '../Components/UI/Gradient';
import { statusGradients } from '../Utils/Colors';
import Title from '../Components/UI/Text/Title';
import AppTextInput from '../Components/UI/Inputs/AppTextInput';
import PrimaryButton from '../Components/UI/Buttons/PrimaryButton';
import { navigate } from '../Navigations/NavigationServices';
import { Screens } from '../Utils/Const';

const handleRequestForOTP = () => {
  console.log('OTP Requested');
};

const handleRequestForChangePassword = () => {
  console.log('Change Password Requested');
  navigate(Screens.OTPScreen);
};

const ForgetPasswordScreen = () => {
  const isSentOTP = false;
  const emailRef = useRef<TextInput>(null);

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
            <AppTextInput
              ref={emailRef}
              label="Enter Your Email"
              autoComplete="email" // or "off", "name", "password" etc. (as needed)
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="send"
              onSubmitEditing={handleRequestForChangePassword}
            />
          </View>
          <PrimaryButton
            title="Forget Now"
            onPress={handleRequestForChangePassword}
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
