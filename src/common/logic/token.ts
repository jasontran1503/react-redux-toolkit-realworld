import AxiosClient from 'app/axiosClient';

export function setToken(token: string | null) {
  if (token) {
    AxiosClient.defaults.headers.common['Authorization'] = `Token ${token}`;
  } else {
    delete AxiosClient.defaults.headers.common['Authorization'];
  }
}
