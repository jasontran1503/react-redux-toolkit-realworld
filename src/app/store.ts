import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import counterReducer from 'features/counter/counterSlice';
import articleDetailReducer from 'features/home/slices/article-detail/articleDetailSlice';
import articleListReducer from 'features/home/slices/article-list/articleListSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  articleList: articleListReducer,
  articleDetail: articleDetailReducer
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
