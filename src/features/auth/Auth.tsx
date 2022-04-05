import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const Auth = () => {
  const routes = useRoutes([
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    }
  ]);

  return <div>{routes}</div>;
};

export default Auth;
