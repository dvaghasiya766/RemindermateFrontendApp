// import { Easing, Image, StyleSheet, Text, View } from 'react-native';
// import React, { use, useEffect } from 'react';
// import { useAppSelector } from '../Hooks/StoreHooks';
// import { replace } from '../Navigations/NavigationServices';
// import { Screens } from '../Utils/Const';
// import { moderateScale, widthPx } from '../Utils/Responsive';
// import { AnimatedView } from 'react-native-reanimated/lib/typescript/component/View';
// import {
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from 'react-native-reanimated';

// const StartupScreen = () => {
//   const { user, token } = useAppSelector(state => state.Auth);
//   //   console.log('👤 Current User at SignInScreen:', user, token);
//   const top = useSharedValue(100); // start below screen

//   const positionConfig = {
//     duration: 500,
//     easing: Easing.bezier(0.5, 0.01, 0, 1),
//   };

//   const animatedStyle = useAnimatedStyle(() => ({
//     top: top.value,
//   }));

//   useEffect(() => {
//     // animate to top 0
//     top.value = withTiming(0, positionConfig);
//     if (user && token) {
//       setTimeout(() => {
//         replace(Screens.BottomTab);
//       }, 500);
//     } else {
//       setTimeout(() => {
//         replace(Screens.SignInScreen);
//       }, 500);
//     }
//   }, []);

//   return (
//     <View style={styles.rootContainer}>
//       <AnimatedView style={[styles.logoContainer, animatedStyle]}>
//         <Image source={require('../Images/Logo.png')} style={styles.image} />
//       </AnimatedView>
//     </View>
//   );
// };

// export default StartupScreen;

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoContainer: {
//     position: 'absolute',
//   },
//   image: {
//     width: widthPx(100),
//     resizeMode: 'contain',
//   },
// });

// // const styles = StyleSheet.create({

// //   innerContainer: {
// //     width: '90%',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },

// // });
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
import { useAppSelector } from '../Hooks/StoreHooks';
import { replace } from '../Navigations/NavigationServices';
import { Screens } from '../Utils/Const';
import { widthPx } from '../Utils/Responsive';

const StartupScreen = () => {
  const { user, token } = useAppSelector(state => state.Auth);

  // Shared values for animation
  const scale = useSharedValue(0.5);
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  useEffect(() => {
    // Animate logo: fade in + bounce
    opacity.value = withTiming(1, { duration: 800 });
    scale.value = withSequence(
      withTiming(1.2, { duration: 600, easing: Easing.out(Easing.exp) }),
      withTiming(1, { duration: 300 }),
    );

    // After animation, redirect
    const timer = setTimeout(() => {
      if (user && token) {
        replace(Screens.BottomTab);
      } else {
        replace(Screens.SignInScreen);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Animated.View style={[styles.logoContainer, animatedStyle]}>
        <Image source={require('../Images/Logo.png')} style={styles.image} />
      </Animated.View>
    </View>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // can use brand color
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: widthPx(100),
    height: widthPx(100),
    resizeMode: 'contain',
  },
});
