import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Auth = React.lazy(() => import('../../features/auth/Auth'));
const Home = React.lazy(() => import('../../features/home/Home'));
const Editor = React.lazy(() => import('../../features/editor/Editor'));
const Settings = React.lazy(() => import('../../features/settings/Settings'));
const Profile = React.lazy(() => import('../../features/profile/Profile'));

const MainLayout = () => {
  const routes = useRoutes([
    {
      path: 'auth/*',
      element: (
        <React.Suspense fallback={<div>Loading... </div>}>
          <Auth />
        </React.Suspense>
      )
    },
    {
      path: '/*',
      element: (
        <React.Suspense fallback={<div>Loading... </div>}>
          <Home />
        </React.Suspense>
      )
    },
    {
      path: 'editor',
      element: (
        <React.Suspense fallback={<div>Loading... </div>}>
          <Editor />
        </React.Suspense>
      )
    },
    {
      path: 'settings',
      element: (
        <React.Suspense fallback={<div>Loading... </div>}>
          <Settings />
        </React.Suspense>
      )
    },
    {
      path: 'profile',
      element: (
        <React.Suspense fallback={<div>Loading... </div>}>
          <Profile />
        </React.Suspense>
      )
    }
  ]);

  return (
    <>
      <Header />
      {routes}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
