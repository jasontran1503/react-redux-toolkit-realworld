export interface LoginParams {
  email: string;
  password: string;
}

export interface User {
  bio: string;
  email: string;
  image: string;
  token: string;
  username: string;
}

export interface LoginSuccessResponse {
  user: User;
}

export interface LoginFailResponse {
  errors: any;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: any | null;
}

// export interface AuthAction {
//   type: string;
//   payload?: any;
// }
