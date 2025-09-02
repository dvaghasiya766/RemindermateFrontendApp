import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
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

const handleSignIn = () => {
  replace(Screens.BottomTab, { isSentOTP: false });
};

const SignInScreen = () => {
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

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
              label="Create New Password"
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
