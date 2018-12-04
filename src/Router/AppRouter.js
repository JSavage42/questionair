import React from 'react';
import { Router, Switch } from 'react-router-dom';
import PublicRouter from './PublicRoute';
import createHistory from 'history/createBrowserHistory';
import CreateTestBank from '../components/Questions/CreateTestBank';
import NewQuestion from '../components/Questions/NewQuestion';
import AdminDashboard from '../components/Admin/AdminDashboard';
import TakeTest from '../components/Student/TakeTest';
import Test from '../components/Student/Test';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRouter path={'/'} component={AdminDashboard} exact/>
      <PublicRouter path={'/new_test'} component={CreateTestBank} exact/>
      <PublicRouter path={'/add_questions'} component={NewQuestion}/>
      <PublicRouter path={'/take_test'} component={TakeTest}/>
      <PublicRouter path={'/test/:id'} component={Test} />
    </Switch>
  </Router>
);

export default AppRouter;