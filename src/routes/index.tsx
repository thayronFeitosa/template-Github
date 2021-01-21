import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dahboard from '../pages/Deshboard';
import Repository from '../pages/Repository';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dahboard} />
    <Route path="repository" exact component={Repository} />
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
