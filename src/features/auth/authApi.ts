import AxiosClient from 'app/axiosClient';
import { removeLocalStorage, setLocalStorage } from 'common/logic/storage';
import { setToken } from 'common/logic/token';
import { UserResponse } from './authModel';

const login = (email: string, password: string) => {
  return AxiosClient.post<UserResponse>('users/login', {
    user: {
      email,
      password
    }
  }).then((response) => {
    setLocalStorage('api_token', response.data.user.token);
    setToken(response.data.user.token);
    return response.data;
  });
};

const register = (username: string, email: string, password: string) => {
  return AxiosClient.post<UserResponse>('users', {
    user: {
      username,
      email,
      password
    }
  }).then((response) => {
    setLocalStorage('api_token', response.data.user.token);
    setToken(response.data.user.token);
    return response.data;
  });
};

const getCurrentUser = () => {
  return AxiosClient.get<UserResponse>('user');
};

const logout = () => {
  removeLocalStorage('api_token');
};

const updateCurrentUser = () => {
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
