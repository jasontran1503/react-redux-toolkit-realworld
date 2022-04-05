import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { AuthState, LoginSuccessResponse } from './authModel';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStarted(state: AuthState) {
      const newState: AuthState = {
        ...state,
        isLoading: true
      };
      return newState;
    },
    loginSuccess(state: AuthState, action: PayloadAction<LoginSuccessResponse>) {
      const newState: AuthState = {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user
      };
      return newState;
    },
    loginFail(state: AuthState, action: PayloadAction<any>) {
      console.log(action);
      const newState: AuthState = {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.payload
      };
      return newState;
    }
  }
});

export const authActions = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.user?.token;
export const selectError = (state: RootState) => state.auth.error;

const authReducer = authSlice.reducer;
export default authReducer;
