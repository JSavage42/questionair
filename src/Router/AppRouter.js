import React from 'react';
import { Router, Switch } from 'react-router-dom';
import PublicRouter from './PublicRoute';
import createHistory from 'history/createBrowserHistory';
import CreateTestBank from '../components/Questions/CreateTestBank';
import NewQuestion from '../components/Questions/NewQuestion';
import AdminDashboard from '../components/Admin/AdminDashboard';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRouter path={'/'} component={AdminDashboard} exact/>
      <PublicRouter path={'/new_test'} component={CreateTestBank} exact/>
      <PublicRouter path={'/add_questions'} component={NewQuestion}/>
    </Switch>
  </Router>
);

export default AppRouter;