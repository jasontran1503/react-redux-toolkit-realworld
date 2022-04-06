import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from './authApi';
import { LoginUser, NewUser } from './authModel';

const login = createAsyncThunk('auth/login', async (loginUser: LoginUser, { rejectWithValue }) => {
  try {
    const response = await authApi.login(loginUser.email, loginUser.password);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const register = createAsyncThunk(
  'auth/register',
  async (newUser: NewUser, { rejectWithValue }) => {
    try {
      const response = await authApi.register(newUser.email, newUser.email, newUser.password);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async (_, { rejectWithValue }) => {
  try {
    const response = await authApi.getCurrentUser();
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const authThunk = {
  login,
  register,
  getCurrentUser
  // logout,
  // updateCurrentUser
};

export default authThunk;
