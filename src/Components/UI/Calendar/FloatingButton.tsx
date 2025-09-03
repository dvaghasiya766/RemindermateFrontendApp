import React, {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Colors } from '../../../Utils/Colors'; // your theme file

interface FloatingButtonProps {
  bgColor: string;
  secondaryColor: string;
  iconColor: string;
}

const FloatingButton = forwardRef<
  null | { toggleMenu: () => void },
  FloatingButtonProps
>(({ bgColor, secondaryColor, iconColor }, ref) => {
  useImperativeHandle(ref, () => ({
    toggleMenu: () => {
      setOpen(false);
      rotation.value = withSpring(0);
      offset.value = withTiming(0);
    },
  }));

  const [open, setOpen] = useState(false);

  console.log('FloatingButton Rendered', open);
  const rotation = useSharedValue(0);
  const offset = useSharedValue(0);

  const toggleMenu = () => {
    setOpen(!open);
    rotation.value = withSpring(open ? 0 : 45);
    offset.value = withTiming(open ? 0 : 1);
  };

  const animatedIcon = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const followUpStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(-70 * offset.value) }],
    opacity: offset.value,
  }));

  const receiverStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(-140 * offset.value) }],
    opacity: offset.value,
  }));

  const profileStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(-210 * offset.value) }],
    opacity: offset.value,
  }));

  return (
    <View style={styles.container}>
      {/* Update Profile */}
      <Animated.View style={[styles.option, profileStyle]}>
        <TouchableOpacity
          style={[styles.smallButton, { backgroundColor: secondaryColor }]}
          onPress={() => console.log('Update Profile')}
        >
          <Ionicons name="person" size={22} color={iconColor} />
        </TouchableOpacity>
        {/* <Text style={styles.label}>Update Profile</Text> */}
      </Animated.View>

      {/* Add Receiver */}
      <Animated.View style={[styles.option, receiverStyle]}>
        <TouchableOpacity
          style={[styles.smallButton, { backgroundColor: secondaryColor }]}
          onPress={() => console.log('Add Receiver')}
        >
          <Ionicons name="people" size={22} color={iconColor} />
        </TouchableOpacity>
        {/* <Text style={styles.label}>Add Receiver</Text> */}
      </Animated.View>

      {/* Add FollowUp */}
      <Animated.View style={[styles.option, followUpStyle]}>
        <TouchableOpacity
          style={[styles.smallButton, { backgroundColor: secondaryColor }]}
          onPress={() => console.log('Add FollowUp')}
        >
          <Ionicons name="calendar" size={22} color={iconColor} />
        </TouchableOpacity>
        {/* <Text style={styles.label}>Add FollowUp</Text> */}
      </Animated.View>

      {/* Main Floating Button */}
      <TouchableOpacity activeOpacity={0.9} onPress={toggleMenu}>
        <Animated.View
          style={[styles.fab, animatedIcon, { backgroundColor: bgColor }]}
        >
          <Ionicons name="add" size={28} color={Colors.white} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
});

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignItems: 'center',
  },
  fab: {
    backgroundColor: Colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  smallButton: {
    backgroundColor: Colors.primaryDark,
    width: 45,
    height: 45,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 4,
  },
  option: {
    position: 'absolute',
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: 10,
    color: Colors.textPrimary,
    fontSize: 13,
  },
});
