import APICall from '../../Networks/ApiCall';
import { EndPoints } from '../../Networks/EndPoints';
import Loader from '../../Utils/AppLoader';

const signUpAPIc = async (userData: object) => {
  try {
    Loader.isLoading(true);
    const response = await APICall({
      method: 'post',
      url: EndPoints.register,
      payload: userData,
      removeToken: true,
    });
    return response;
  } catch (error) {
    return error;
  } finally {
    Loader.isLoading(false);
  }
};

const signInAPIc = async (credentials: object) => {
  try {
    Loader.isLoading(true);
    const response = await APICall({
      method: 'post',
      url: EndPoints.login,
      payload: credentials,
      removeToken: true,
    });
    return response;
  } catch (error) {
    return error;
  } finally {
    Loader.isLoading(false);
  }
};

const forgotPasswordAPIcm = async (emailData: object) => {
  try {
    Loader.isLoading(true);
    const response = await APICall({
      method: 'post',
      url: EndPoints.forgotpassword,
      payload: emailData,
      removeToken: true,
    });
    return response;
  } catch (error) {
    return error;
  } finally {
    Loader.isLoading(false);
  }
};

const forgotPasswordOTPAPIcm = async (otpData: object) => {
  try {
    Loader.isLoading(true);
    const response = await APICall({
      method: 'post',
      url: EndPoints.forgotpasswordotp,
      payload: otpData,
      removeToken: true,
    });
    return response;
  } catch (error) {
    return error;
  } finally {
    Loader.isLoading(false);
  }
};

const resetPasswordAPIcm = async (passwordData: object) => {
  try {
    Loader.isLoading(true);
    const response = await APICall({
      method: 'post',
      url: EndPoints.resetpassword,
      payload: passwordData,
      removeToken: true,
    });
    return response;
  } catch (error) {
    return error;
  } finally {
    Loader.isLoading(false);
  }
};

const verifyRegisterOtpAPIcm = async (otpData: object) => {
  try {
    Loader.isLoading(true);
    const response = await APICall({
      method: 'post',
      url: EndPoints.verifyRegisterOtp,
      payload: otpData,
      removeToken: true,
    });
    return response;
  } catch (error) {
    return error;
  } finally {
    Loader.isLoading(false);
  }
};

const resendOtpAPIcm = async (emailData: object) => {
  try {
    Loader.isLoading(true);
    const response = await APICall({
      method: 'post',
      url: EndPoints.resendotp,
      payload: emailData,
      removeToken: true,
    });
    return response;
  } catch (error) {
    return error;
  } finally {
    Loader.isLoading(false);
  }
};

export {
  signUpAPIc,
  signInAPIc,
  forgotPasswordAPIcm,
  forgotPasswordOTPAPIcm,
  resetPasswordAPIcm,
  verifyRegisterOtpAPIcm,
  resendOtpAPIcm,
};
