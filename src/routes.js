import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import NotFound from './views/Pages/NotFound';
import MainLayout from './views/Layouts/MainLayout';
import Landing from './views/Pages/Landing';
import Lab3 from './views/Pages/Lab3';

export default [
  <Route>
    <Route path="/" component={MainLayout} >
      <IndexRoute name="home" component={Landing} />
      <Route name="lab3" path="/lab3" component={Lab3} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>,
];
