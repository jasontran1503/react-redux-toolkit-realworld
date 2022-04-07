import axiosClient from 'app/axiosClient';

export function setToken(token: string | null) {
  if (token) {
    axiosClient.defaults.headers.common['Authorization'] = `Token ${token}`;
  } else {
    delete axiosClient.defaults.headers.common['Authorization'];
  }
}
