import axiosClient from 'app/axiosClient';
import { removeLocalStorage, setLocalStorage } from 'common/logic/storage';
import { setToken } from 'common/logic/token';
import { UpdateUserRequest, UserResponse } from './authModel';

const login = (email: string, password: string) => {
  return axiosClient
    .post<UserResponse>('users/login', {
      user: {
        email,
        password
      }
    })
    .then((response) => {
      setLocalStorage('api_token', response.data.user.token);
      setToken(response.data.user.token);
      return response.data;
    });
};

const register = (username: string, email: string, password: string) => {
  return axiosClient
    .post<UserResponse>('users', {
      user: {
        username,
        email,
        password
      }
    })
    .then((response) => {
      setLocalStorage('api_token', response.data.user.token);
      setToken(response.data.user.token);
      return response.data;
    });
};

const getCurrentUser = () => {
  return axiosClient.get<UserResponse>('user');
};

const updateCurrentUser = (updateUserRequest: UpdateUserRequest) => {
  return axiosClient.put<UserResponse>('user', {
    updateUserRequest
  });
};

const logout = () => {
  removeLocalStorage('api_token');
};

const authApi = {
  login,
  register,
  getCurrentUser,
  logout,
  updateCurrentUser
};

export default authApi;
