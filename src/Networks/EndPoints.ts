import FollowUp from '../Models/FollowUp';

export const EndPoints = {
  register: 'register',
  login: 'login',
  forgotpassword: 'forgotpassword',
  forgotpasswordotp: 'forgotpasswordotp',
  resetpassword: 'resetpassword',
  verifyRegisterOtp: 'verify-register-otp',
  resendotp: 'resend-otp',
  addreceiver: 'addreceivers',
  followupByMonth: 'followups/monthly-followups?',
  fetchReceivers: 'receivers/getMyReceivers',
  fetchReceiver: 'receiver/',
  fetchFollowUpsByReceiverId: 'followups/receiver/',
  addNewFollowUp: 'addfollowups',
};
