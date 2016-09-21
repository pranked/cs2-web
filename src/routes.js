import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import NotFound from './views/Pages/NotFound';
import MainLayout from './views/Layouts/MainLayout';
import Landing from './views/Pages/Landing';
import Problem1 from './views/Pages/Problem1';

export default [
  <Route>
    <Route path="/" component={MainLayout} >
      <IndexRoute name="home" component={Landing} />
      <Route name="lab2" path="/lab2" component={Problem1} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>,
];
