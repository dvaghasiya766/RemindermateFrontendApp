import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { StyleSheet, TextInput, View, TextInputProps } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Ionicons from '@react-native-vector-icons/ionicons';
import IconButton from '../Buttons/IconButton';
import { Colors } from '../../../Utils/Colors';
import { Fonts } from '../../../Utils/Fonts';
import { CommonStylesFn } from '../../../Utils/CommonStyles';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface AppTextInputProps extends TextInputProps {
  label?: string;
  isPsw?: boolean;
  setEnteredText(text: string): void;
}

// 👇 forwardRef so parent can access .focus()
const AppTextInput = forwardRef<any | TextInput, AppTextInputProps>(
  ({ label, isPsw = false, setEnteredText, ...props }, ref) => {
    const inputRef = useRef<TextInput>(null);

    // expose imperative methods to parent
    useImperativeHandle(ref, () => inputRef.current);

    const [isSecure, setIsSecure] = useState(isPsw);
    const [enteredText, setText] = useState('');
    const [labelState, setLabelState] = useState({
      isFocused: false,
      topValue: 19,
      color: Colors.gray200,
      border: Colors.gray100,
      icon: Colors.gray400,
    });

    const toggleVisibility = () => setIsSecure(prev => !prev);
    const onChangeText = (text: string) => {
      setEnteredText(text);
      setText(text);
    };

    const onFocus = () =>
      setLabelState({
        isFocused: true,
        topValue: -4,
        color: Colors.primary,
        border: Colors.primary,
        icon: Colors.primary,
      });

    const onBlur = () => {
      const givenText = enteredText.trim();
      if (givenText !== '') {
        setLabelState({
          isFocused: true,
          topValue: -4,
          color: Colors.gray200,
          border: Colors.gray100,
          icon: Colors.gray400,
        });
      } else {
        setLabelState({
          isFocused: false,
          topValue: 19,
          color: Colors.gray200,
          border: Colors.gray100,
          icon: Colors.gray400,
        });
      }
    };

    const colorConfig = { duration: 400, easing: Easing.inOut(Easing.ease) };
    const positionConfig = {
      duration: 500,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    };
    const sizeConfig = { duration: 350, easing: Easing.out(Easing.cubic) };

    const selectedLabel = useAnimatedStyle(() => ({
      color: withTiming(labelState.color, colorConfig),
      fontSize: withTiming(labelState.isFocused ? 13 : 16, sizeConfig),
      top: withTiming(labelState.topValue, positionConfig),
    }));

    const selectedInput = useAnimatedStyle(() => ({
      borderColor: withTiming(labelState.border, colorConfig),
    }));

    return (
      <View style={styles.container}>
        <AnimatedTextInput
          ref={inputRef}
          {...props}
          autoCorrect={true}
          cursorColor={Colors.primary}
          secureTextEntry={isSecure}
          style={[styles.input, selectedInput]}
          onChangeText={text => onChangeText(text)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {label && (
          <Animated.Text style={[selectedLabel, styles.label]}>
            {label}
          </Animated.Text>
        )}
        {isPsw && (
          <IconButton
            onPress={toggleVisibility}
            style={{
              position: 'absolute',
              right: 3,
              padding: 12,
            }}
          >
            <Ionicons
              name={isSecure ? 'eye-off' : 'eye'}
              size={20}
              color={labelState.icon}
            />
          </IconButton>
        )}
      </View>
    );
  },
);

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginVertical: 2,
    justifyContent: 'center',
    width: '100%',
  },
  label: {
    position: 'absolute',
    paddingHorizontal: 4,
    left: 20,
    top: 19,
    backgroundColor: Colors.white,
    ...CommonStylesFn.text(3, Colors.gray200, Fonts.medium),
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: Colors.gray100,
    borderRadius: 25,
    marginVertical: 4,
    paddingHorizontal: 23,
    overflow: 'hidden',
    ...CommonStylesFn.text(3.5, Colors.gray400, Fonts.regular),
  },
});
