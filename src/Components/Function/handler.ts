import { store } from '../../Store/Store';

export const getToken = () => {
  return store.getState().Auth.token;
};
