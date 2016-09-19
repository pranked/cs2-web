import React from 'react';
import {Route, IndexRoute} from 'react-router';

// Components
import NotFound from './views/NotFound/NotFound';
import MainLayout from './views/Layouts/MainLayout';
import HomeScreen from './views/HomeScreen/HomeScreen';

export default [
    <Route>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={HomeScreen}/>
        </Route>
        <Route path="*" component={MainLayout}>
            <IndexRoute component={NotFound}/>
        </Route>
    </Route>
];
