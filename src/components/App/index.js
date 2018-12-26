import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import InstructorPage from '../Instructor';
import StudentPage from '../Student';
import { CreateTestBank, TakeTest, SelectTest, TestPage } from '../Tests';
import { NewQuestion } from '../Questions';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import '../../styles/base/App.css';
import { UserItem } from '../Users';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          exact
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
        <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
        <Route exact path={ROUTES.INSTRUCTOR} component={InstructorPage} />
        <Route exact path={ROUTES.STUDENT} component={StudentPage} />
        <Route exact path={ROUTES.CREATE_TEST} component={CreateTestBank} />
        <Route exact path={ROUTES.NEW_QUESTION} component={NewQuestion} />
        <Route exact path={ROUTES.SELECT_TEST} component={SelectTest} />
        <Route exact path={ROUTES.TESTS} component={TestPage} />
        <Route exact path={ROUTES.TAKE_TEST} component={TakeTest} />
      </Switch>
    </div>
  </Router>
);

export default withAuthentication(App);
