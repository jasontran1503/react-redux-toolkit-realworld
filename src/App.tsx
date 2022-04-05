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
        <React.Suspense fallback={<div>Loading... </div>}>
          <MainLayout />
        </React.Suspense>
      )
    },
    {
      path: '*',
      element: (
        <React.Suspense fallback={<div>Loading... </div>}>
          <NotFound />
        </React.Suspense>
      )
    }
  ]);

  return <>{routes}</>;
};

export default App;
