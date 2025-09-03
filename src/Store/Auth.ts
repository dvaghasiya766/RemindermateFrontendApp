import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { revertAll } from './RevertAll';
import { UserDetails } from '../Types/CommonTypes';

interface AuthState {
  token: string | null;
  user: UserDetails | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  extraReducers: builder =>
    builder.addCase(revertAll, () => {
      return initialState;
    }),
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<UserDetails>) => {
      state.user = action.payload;
    },
    clearAuthData: () => {
      return initialState;
    },
    clearToken: () => {
      return {
        ...initialState,
        token: null,
      };
    },
    clearUser: () => {
      return {
        ...initialState,
        user: null,
      };
    },
  },
});

export const {
  setToken,
  clearToken,
  setAuthData,
  setUser,
  clearAuthData,
  clearUser,
} = authSlice.actions;

export default authSlice.reducer;
