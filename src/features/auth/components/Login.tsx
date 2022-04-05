import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { LoginParams } from '../authModel';
import '../Auth.css';
import { useAppDispatch } from 'app/hooks';
import { authActions } from '../authSlice';
import AuthApi from '../authApi';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validation = yup.object().shape({
    email: yup.string().required('Email is required').email('Email invalidate'),
    password: yup.string().required('Password is required').min(6, 'Password min length is 6')
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LoginParams>({
    mode: 'onTouched',
    resolver: yupResolver(validation)
  });

  const onSubmit = async (data: LoginParams) => {
    dispatch(authActions.loginStarted());
    try {
      const response = await AuthApi.login(data.email, data.password);
      dispatch(authActions.loginSuccess(response));
      reset();
      navigate('/');
    } catch (error) {
      dispatch(authActions.loginFail(error));
    }
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div style={{ width: '70%', margin: '0 auto' }}>
          <h1 className="text-xs-center">Sign in</h1>
          <p className="text-xs-center">
            <Link to="/auth/register">Need an account?</Link>
          </p>

          <ul className="invalid-text">
            <li>That email is already taken</li>
          </ul>

          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="form-group">
              <input
                {...register('email')}
                className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                type="text"
                placeholder="Email"
              />
              <span className="invalid-text">{errors.email?.message}</span>
            </fieldset>
            <fieldset className="form-group">
              <input
                {...register('password')}
                className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`}
                type="password"
                placeholder="Password"
              />
              <span className="invalid-text">{errors.password?.message}</span>
            </fieldset>
            <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
