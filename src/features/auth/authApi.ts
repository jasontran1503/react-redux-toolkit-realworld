import AxiosClient from 'app/axiosClient';
import { setLocalStorage } from 'common/logic/storage';
import { setToken } from 'common/logic/token';
import { LoginSuccessResponse, User } from './authModel';

const login = (email: string, password: string): Promise<LoginSuccessResponse> => {
  return AxiosClient.post<LoginSuccessResponse>('users/login', {
    user: {
      email,
      password
    }
  }).then((response) => {
    setLocalStorage('api_token', response.data.user.token);
    setToken(response.data.user.token)
    return response.data;
  });
};

const register = (username: string, email: string, password: string) => {
  return AxiosClient.post('users', {
    username,
    email,
    password
  });
};

const getCurrentUser = () => {
  return AxiosClient.get<User>('users')
}

const AuthApi = {
  login,
  register,
  getCurrentUser
};

export default AuthApi;
