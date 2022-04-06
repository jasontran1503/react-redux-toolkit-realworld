import { useAppDispatch } from 'app/hooks';
import { getLocalStorage } from 'common/logic/storage';
import { setToken } from 'common/logic/token';
import { selectUser } from 'features/auth/authSlice';
import authThunk from 'features/auth/authThunk';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useCheckAuth = () => {
  const dispatch = useAppDispatch();

  const user = useSelector(selectUser);
  const token = getLocalStorage('api_token');

  if (token) {
    setToken(token);
  }

  useEffect(() => {
    const getCurrentUser = async () => {
      await dispatch(authThunk.getCurrentUser());
    };

    if (token && user) {
      return;
    } else {
      getCurrentUser();
    }
  }, []);

  return user;
};
