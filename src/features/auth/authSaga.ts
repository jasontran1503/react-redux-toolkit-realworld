import { PayloadAction } from '@reduxjs/toolkit';
import { GenericError } from 'appModels';
import { call, put, takeLeading } from 'redux-saga/effects';
import authApi from './authApi';
import { LoginUser, UserResponse } from './authModel';
import { authActions } from './authSlice';

function* handleLogin(action: PayloadAction<LoginUser>) {
  try {
    const response: UserResponse = yield call(
      authApi.login,
      action.payload.email,
      action.payload.password
    );
    yield put(authActions.loginSuccess(response));
  } catch (error) {
    yield put(authActions.loginFail(error as GenericError));
  }
}

export default function* authSaga() {
  yield takeLeading(authActions.loginBegin.type, handleLogin);
}
