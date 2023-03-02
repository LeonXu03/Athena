import { createSlice } from '@reduxjs/toolkit';

type Nullable<T> = T | null;

export interface AuthState {
  token: Nullable<string>;
  userName: Nullable<string>;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  statusText: Nullable<string>;
}

const initialState: AuthState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = authSlice.actions;

export default authSlice.reducer;
