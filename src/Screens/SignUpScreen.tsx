import { Alert, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import React, { useRef } from 'react';
// Custom Components
import Gradient from '../Components/UI/Gradient';
import { statusGradients } from '../Utils/Colors';
import Title from '../Components/UI/Text/Title';
import AppTextInput from '../Components/UI/Inputs/AppTextInput';
import PrimaryButton from '../Components/UI/Buttons/PrimaryButton';
import { Screens } from '../Utils/Const';
import NavigateButton from '../Components/UI/Buttons/NavigateButton';
import { navigate, replace } from '../Navigations/NavigationServices';
import { signUpAPIc } from '../Components/Function/APIs';

const SignInScreen = () => {
  const [enteredEmail, setEnteredEmail] = React.useState('');
  const [enteredName, setEnteredName] = React.useState('');
  const [enteredPassword, setEnteredPassword] = React.useState('');
  const [enteredRePassword, setEnteredRePassword] = React.useState('');

  const emailRef = useRef<TextInput>(null);
  const nameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const repasswordRef = useRef<TextInput>(null);

  const handleSignUp = async () => {
    if (
      !enteredEmail ||
      !enteredName ||
      !enteredPassword ||
      !enteredRePassword
    ) {
      Alert.alert('Missing Fields', 'All Fields are required.', [
        { text: 'OK' },
      ]);
      return;
    }

    const userData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      confirm_password: enteredRePassword,
    };

    const response: any = await signUpAPIc(userData);
    const data = response?.data;

    if (!response.data.success) {
      let errorText = '';

      if (data.errors) {
        errorText = Object.entries(data.errors)
          .map(([field, messages]) => `${messages.join('\n')}`)
          .join('\n');
      }
      Alert.alert(`Error ${response.status}`, errorText, [{ text: 'OK' }]);
      return;
    }

    replace(Screens.OTPScreen, {
      mailId: enteredEmail,
      useForActivation: true,
    });
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
          <Title>Sign Up Here</Title>
          <View style={styles.inputContainer}>
            <AppTextInput
              ref={nameRef}
              setEnteredText={setEnteredName}
              label="Set Your Name"
              autoCapitalize="words"
              autoCorrect={true}
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current?.focus()}
            />
            <AppTextInput
              ref={emailRef}
              setEnteredText={setEnteredEmail}
              label="Enter Your Email"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              autoCorrect={false}
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
            <AppTextInput
              isPsw
              ref={passwordRef}
              setEnteredText={setEnteredPassword}
              label="Create New Password"
              returnKeyType="next"
              onSubmitEditing={() => repasswordRef.current?.focus()}
            />
            <AppTextInput
              isPsw
              ref={repasswordRef}
              setEnteredText={setEnteredRePassword}
              label="Re-Enter Password"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="send"
            />
          </View>
          <PrimaryButton title="Sign Up Now" onPress={handleSignUp} />
        </ScrollView>
      </View>
      <NavigateButton title="I have an Account" screen={Screens.SignInScreen} />
    </Gradient>
  );
};

export default SignInScreen;

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
});
