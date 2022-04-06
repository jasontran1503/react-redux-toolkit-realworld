import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { GenericError } from 'appModels';
import authApi from './authApi';
import { AuthState } from './authModel';
import authThunk from './authThunk';

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
    logout: (state) => {
      authApi.logout();
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(authThunk.login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authThunk.login.fulfilled, (state, action) => {
        if (action.payload) {
          state.isAuthenticated = true;
          state.isLoading = false;
          state.user = action.payload.user;
        }
      })
      .addCase(authThunk.login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as GenericError;
      })

      // Register
      .addCase(authThunk.register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authThunk.register.fulfilled, (state, action) => {
        if (action.payload) {
          state.isAuthenticated = true;
          state.isLoading = false;
          state.user = action.payload.user;
        }
      })
      .addCase(authThunk.register.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload as GenericError;
      })

      // Get current user
      .addCase(authThunk.getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authThunk.getCurrentUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.isAuthenticated = true;
          state.isLoading = false;
          state.user = action.payload.user;
        }
      })
      .addCase(authThunk.getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload as GenericError;
      })

      // Update current user
      .addCase(authThunk.updateCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = null;
      });
  }
});

export const authActions = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectUser = (state: RootState) => state.auth.user;
export const selectLoading = (state: RootState) => state.auth.isLoading;
export const selectErrors = (state: RootState) => state.auth.error?.errors;

const authReducer = authSlice.reducer;
export default authReducer;
