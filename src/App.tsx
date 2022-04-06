import Loading from 'common/layouts/Loading';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';

const MainLayout = React.lazy(() => import('./common/layouts/MainLayout'));
const NotFound = React.lazy(() => import('./common/layouts/NotFound'));

const App = () => {
  const routes = useRoutes([
    {
      path: '/*',
      element: (
        <React.Suspense fallback={<Loading />}>
          <MainLayout />
        </React.Suspense>
      )
    },
    {
      path: '*',
      element: (
        <React.Suspense fallback={<Loading />}>
          <NotFound />
        </React.Suspense>
      )
    }
  ]);

  return <>{routes}</>;
};

export default App;
