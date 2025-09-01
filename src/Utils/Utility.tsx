import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from 'react-native-toast-message';
import { Colors, statusGradients } from './Colors';
import { scale, verticalScale, widthPx } from './Responsive';
import { Fonts } from './Fonts';
import { CommonStylesFn } from './CommonStyles';
import { Platform } from 'react-native';
import { Screens, ToastType } from './Const';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { store } from '../Stores/Store';
import { revertAll } from '../Stores/RevertAll';
import { reset } from '../Navigation/NavigationServices';

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
      style={{
        borderLeftColor: Colors.green,
        height: verticalScale(70),
        width: widthPx(80),
      }}
      contentContainerStyle={{ paddingHorizontal: scale(10) }}
      text1Style={[
        CommonStylesFn.text(3, Colors.black, Fonts.medium),
        Platform.OS === 'ios' && { marginBottom: verticalScale(5) },
      ]}
      text2Style={CommonStylesFn.text(3.5, Colors.green)}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
      style={{
        borderLeftColor: Colors.error,
        height: verticalScale(70),
        width: widthPx(80),
      }}
      contentContainerStyle={{
        paddingHorizontal: scale(10),
      }}
      text1Style={[
        CommonStylesFn.text(3, Colors.black, Fonts.medium),
        Platform.OS === 'ios' && { marginBottom: verticalScale(5) },
      ]}
      text2Style={CommonStylesFn.text(3.5, Colors.error)}
    />
  ),
  info: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      text2NumberOfLines={2}
      style={{ borderLeftColor: Colors.info, height: verticalScale(70) }}
      contentContainerStyle={{ paddingHorizontal: scale(10) }}
      text1Style={[
        CommonStylesFn.text(3, Colors.black, Fonts.medium),
        Platform.OS === 'ios' && { marginBottom: verticalScale(5) },
      ]}
      text2Style={CommonStylesFn.text(3, Colors.black, Fonts.medium)}
    />
  ),
};

export const showToast = (
  type: ToastType,
  title: string,
  subTitle?: string,
) => {
  return Toast.show({
    type,
    text1: title ?? 'Something went wrong',
    ...(subTitle && { text2: subTitle }),
  });
};

export const getCameraPermission = (functionToCall: () => void) => {
  return new Promise<boolean>((resolve, reject) => {
    const permission = Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA,
    });

    if (!permission) {
      console.error('Permission not defined for the current platform');
      resolve(false);
      return;
    }

    request(permission)
      .then(requestResult => {
        if (requestResult === RESULTS.GRANTED) {
          functionToCall();
          resolve(requestResult === RESULTS.GRANTED);
        }
        reject(requestResult);
      })
      .catch(error => {
        console.log('Error requesting permission:', error);
        reject(false);
      });
  });
};

const validateMobileNumber = (number: string) => {
  const mobileRegex = /^[0-9]{10}$/;
  return mobileRegex.test(number);
};

export const getToken = () => {
  const { token } = store.getState().Auth;
  return token;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

export const getStatusGradient = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'assigned':
      return statusGradients.active;
    case 'pending':
      return statusGradients.pending;
    case 'not printed':
      return statusGradients.inactive;
    default:
      return statusGradients.default;
  }
};

export const logout = () => {
  store.dispatch(revertAll());
  reset({
    index: 0,
    routes: [{ name: Screens.Signin }],
  });
};

export const Utility = {
  toastConfig,
  showToast,
  validateMobileNumber,
  formatDate,
  getStatusGradient,
};
