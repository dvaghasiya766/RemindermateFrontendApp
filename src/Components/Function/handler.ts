import { useDispatch } from 'react-redux';
import { store } from '../../Store/Store';
import { logout } from './APIs';
import { navigate } from '../../Navigations/NavigationServices';
import { Screens } from '../../Utils/Const';

export const getToken = () => {
  return store.getState().Auth.token;
};

export const logOut = async () => {
  console.log('logout');
  const dispatch = useDispatch();
  const response = await logout();
  console.log(response);
  // dispatch({ type: 'LOGOUT' });
  // navigate(Screens.SignInScreen);
};
