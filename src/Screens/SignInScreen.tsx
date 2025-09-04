import { Alert, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import React, { useRef } from 'react';
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
import { DUMMY_USERS } from '../Data/dummy_data';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../Store/Auth';
import { useAppDispatch, useAppSelector } from '../Hooks/StoreHooks';
import Loader from '../Utils/AppLoader';
import { fetchAllProducts, fetchProducts } from '../Components/Function/APIs';

const SignInScreen = () => {
  const [enteredEmail, setEnteredEmail] = React.useState('');
  const [enteredPassword, setEnteredPassword] = React.useState('');

  // const { user } = useAppSelector(state => state.Auth);
  // console.log('👤 Current User at SignInScreen:', user);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const dispatch = useDispatch();

  // const handleSignIn = () => {
  //   Loader.isLoading(true);
  //   if (!enteredEmail || !enteredPassword) {
  //     Alert.alert('Missing Fields', 'Please enter both email and password.', [
  //       { text: 'OK' },
  //     ]);
  //     return;
  //   }

  //   const isValidUser = DUMMY_USERS.find(
  //     user => user.email === enteredEmail && user.password === enteredPassword,
  //   );

  //   if (!isValidUser) {
  //     Alert.alert("Don't lie!", 'You know that this is wrong...', [
  //       { text: 'Sorry!', style: 'cancel' },
  //     ]);
  //     return;
  //   }

  //   // dispatch(setUser(isValidUser));
  //   // dispatch(setToken('dummy-auth-token'));

  //   console.log('✅ Sign-In Successful!', isValidUser);

  //   setTimeout(() => {
  //     Loader.isLoading(false);
  //   }, 10000); // Simulate a delay for better UX
  // };

  const handleSignIn = async () => {
    Loader.isLoading(true);

    if (!enteredEmail || !enteredPassword) {
      Alert.alert('Missing Fields', 'Please enter both email and password.', [
        { text: 'OK' },
      ]);
      Loader.isLoading(false); // 👈 hide loader immediately
      return;
    }

    const isValidUser = DUMMY_USERS.find(
      user =>
        user.email.toLowerCase() === enteredEmail.toLowerCase() &&
        user.password === enteredPassword,
    );

    if (!isValidUser) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      Loader.isLoading(false); // 👈 hide loader if invalid
      return;
    }

    // await new Promise((resolve: any) => setTimeout(resolve, 10000));

    Loader.isLoading(false);
    const data = await fetchAllProducts(); // Example ID
    console.log(data);
    console.log('✅ Sign-In Successful!', isValidUser);
    dispatch(setUser(isValidUser));
    dispatch(setToken('dummy-auth-token'));
    replace(Screens.BottomTab);
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
              params={{ showEmail: true }}
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
