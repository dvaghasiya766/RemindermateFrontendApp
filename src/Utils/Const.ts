enum Screens {
  StartupScreen = 'StartupScreen',
  CalendarViewScreen = 'CalendarViewScreen',
  FollowUpScreen = 'FollowUpScreen',
  ForgetPasswordScreen = 'ForgetPasswordScreen',
  NotificationScreen = 'NotificationScreen',
  OTPScreen = 'OTPScreen',
  ReciverScreen = 'ReciverScreen',
  SignInScreen = 'SignInScreen',
  SignUpScreen = 'SignUpScreen',
  BottomTab = 'BottomTab',
  AddFollowUpScreen = 'AddFollowUpScreen',
  AddReciverScreen = 'AddReciverScreen',
  ViewFollowUpScreen = 'ViewFollowUpScreen',
  ViewReciverScreen = 'ViewReciverScreen',
}

enum ToastType {
  success = 'success',
  error = 'error',
  info = 'info',
}

enum StatusType {
  active = 'active',
  inactive = 'inactive',
  accept = 'accept',
  reject = 'reject',
  complete = 'complete',
  panding = 'panding',
  block = 'block',
  deleted = 'deleted',
}

export { Screens, ToastType, StatusType };
