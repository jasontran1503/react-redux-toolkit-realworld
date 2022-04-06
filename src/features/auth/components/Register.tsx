import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import '../Auth.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { NewUser } from '../authModel';
import authThunk from '../authThunk';
import { useAppDispatch } from 'app/hooks';

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validation = yup.object().shape({
    username: yup.string().required('Username is required').min(6, 'Username min length is 6'),
    email: yup.string().required('Email is required').email('Email invalidate'),
    password: yup.string().required('Password is required').min(6, 'Password min length is 6')
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<NewUser>({
    mode: 'onTouched',
    resolver: yupResolver(validation)
  });

  const onSubmit = async (data: NewUser) => {
    await dispatch(authThunk.register(data)).unwrap();
    reset();
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div style={{ width: '70%', margin: '0 auto' }}>
          <h1 className="text-xs-center">Sign up</h1>
          <p className="text-xs-center">
            <Link to="/auth/login">Have an account?</Link>
          </p>

          <ul className="invalid-text">
            <li>That email is already taken</li>
          </ul>

          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="form-group">
              <input
                {...register('username')}
                className={`form-control form-control-lg ${errors.username ? 'is-invalid' : ''}`}
                type="text"
                placeholder="Your Name"
              />
              <span className="invalid-text">{errors.username?.message}</span>
            </fieldset>
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
