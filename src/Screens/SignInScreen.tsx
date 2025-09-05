import { Alert, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
// Custom Components
import Gradient from '../Components/UI/Gradient';
import { statusGradients } from '../Utils/Colors';
import Title from '../Components/UI/Text/Title';
import AppTextInput from '../Components/UI/Inputs/AppTextInput';
import PrimaryButton from '../Components/UI/Buttons/PrimaryButton';
import { Screens } from '../Utils/Const';
import ChangeStackText from '../Components/UI/Text/ChangeStackText';
import NavigateButton from '../Components/UI/Buttons/NavigateButton';
import { replace } from '../Navigations/NavigationServices';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../Store/Auth';
import { signInAPIc } from '../Components/Function/APIs';

const SignInScreen = () => {
  const [enteredEmail, setEnteredEmail] = React.useState('');
  const [enteredPassword, setEnteredPassword] = React.useState('');

  const dispatch = useDispatch();

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const handleSignIn = async () => {
    if (!enteredEmail || !enteredPassword) {
      Alert.alert('Missing Fields', 'Please enter both email and password.', [
        { text: 'OK' },
      ]);
      return;
    }

    const credentials = {
      email: enteredEmail,
      password: enteredPassword,
    };

    const response: any = await signInAPIc(credentials);
    const data = response?.data;
    // console.log('Sign In Response:', response);

    if (!data?.success) {
      Alert.alert('Invalid', data.message, [{ text: 'OK' }]);
      return;
    }
    if (data?.navigate) {
      Alert.alert('Inactive', data.message, [{ text: 'OK' }]);
      replace(Screens.OTPScreen, {
        mailId: enteredEmail,
        useForActivation: true,
      });
      return;
    }

    dispatch(setUser({ ...data.data }));
    dispatch(setToken(data.token));
    // replace(Screens.BottomTab);
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
          <Title>Sign In Here</Title>
          <View style={styles.inputContainer}>
            <AppTextInput
              ref={emailRef}
              setEnteredText={setEnteredEmail}
              label="Enter Your Email"
              autoComplete="email" // or "off", "name", "password" etc. (as needed)
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              autoCorrect={false}
              onSubmitEditing={() => passwordRef.current?.focus()} // 👈 jump to Name
            />
            <AppTextInput
              isPsw
              ref={passwordRef}
              setEnteredText={setEnteredPassword}
              label="Enter Password"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="send"
              onSubmitEditing={handleSignIn}
            />
          </View>
          <PrimaryButton title="Sign In Now" onPress={handleSignIn} />
          {/* <View style={{  ...styles.textContainer }}>
            <ChangeStackText
            screen={Screens.SignUpScreen}
            navigateText={'SignUp'}
            normalText={`If don't have an Account`}
            />
            </View> */}
          <View style={styles.textContainer}>
            <ChangeStackText
              screen={Screens.ForgetPasswordScreen}
              navigateText={'Password'}
              normalText={'If Remember'}
            />
          </View>
        </ScrollView>
      </View>
      <NavigateButton
        title="Create a New Account"
        screen={Screens.SignUpScreen}
      />
    </Gradient>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    paddingHorizontal: 22,
    flex: 1,
    justifyContent: 'space-around',
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
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
