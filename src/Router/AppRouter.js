import React from 'react';
import { Router, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import createHistory from 'history/createBrowserHistory';
import CreateTestBank from '../components/Questions/CreateTestBank';
import NewQuestion from '../components/Questions/NewQuestion';
import SignInPage from '../components/SignInPage';
import AdminDashboard from '../components/Admin/AdminDashboard';
import InstructorDashboard from '../components/Instructor/InstructorDashboard';
import StudentDashboard from '../components/Student/StudentDashboard';
import TakeTest from '../components/Student/TakeTest';
import Test from '../components/Student/Test';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path={'/'} component={SignInPage} exact />
      <PrivateRoute path={'/admin'} component={AdminDashboard} exact />
      <PrivateRoute path={'/instructor'} component={InstructorDashboard} exact />
      <PrivateRoute path={'/student'} component={StudentDashboard} exact />
      <PrivateRoute path={'/new_test'} component={CreateTestBank} exact />
      <PrivateRoute path={'/add_questions'} component={NewQuestion} />
      <PrivateRoute path={'/take_test'} component={TakeTest} />
      <PrivateRoute path={'/test/:id'} component={Test} />
    </Switch>
  </Router>
);

export default AppRouter;
