import { GenericError } from 'appModels';

export interface LoginUser {
  email: string;
  password: string;
}

export interface LoginUserRequest {
  user: LoginUser;
}

export interface NewUser {
  email: string;
  password: string;
  username: string;
}

export interface NewUserRequest {
  user: NewUser;
}

export interface User {
  bio: string;
  email: string;
  image: string;
  token: string;
  username: string;
}

export interface UserResponse {
  user: User;
}

export interface LoginFailResponse {
  errors: any;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: GenericError | null;
}
