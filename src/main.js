import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';

import history from 'history/lib/createBrowserHistory';
import useSimpleScroll from 'scroll-behavior/lib/useStandardScroll';
const browserHistory = useRouterHistory(useSimpleScroll(history))();

import routes from './routes.js';
import './main.scss';

import $ from 'jquery';

// Expose React for dev tool
window.React = React;
window.$ = $;

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('react-root')
);
