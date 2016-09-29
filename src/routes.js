import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import NotFound from './views/Pages/NotFound';
import MainLayout from './views/Layouts/MainLayout';
import Landing from './views/Pages/Landing';
import Problem from './views/Pages/Problem';

export default [
  <Route>
    <Route path="/" component={MainLayout} >
      <IndexRoute name="home" component={Landing} />
      <Route path="/lab/:id" component={Problem} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>,
];
