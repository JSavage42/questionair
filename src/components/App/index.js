import React from 'react';

// *** Constants *** //
import * as ROUTES from '../../constants/routes';

// *** Third-Party *** //
import { Route, Switch } from 'react-router-dom';

// *** Styles *** //
import '../../styles/base/App.css';

// *** HOC and Context *** //
import { withAuthentication } from '../Session';

// *** Components *** //
import AccountPage from '../Account';
import AdminPage from '../Admin';
import HomePage from '../Home';
import InstructorPage from '../Instructor';
import Navigation from '../Navigation';
import PasswordForgetPage from '../PasswordForget';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import StudentPage from '../Student';
import { NewQuestion } from '../Questions';
import {
  CreateTestBank,
  TakeTest,
  SelectTest,
  TestPage,
  HostTest,
} from '../Tests';
import { UserItem } from '../Users';

const App = () => (
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
      <Route exact path={ROUTES.TEST_VIEW} component={TestPage} />
      <Route exact path={ROUTES.TAKE_TEST} component={TakeTest} />
      <Route exact path={ROUTES.HOST_TEST} component={HostTest} />
    </Switch>
  </div>
);

export default withAuthentication(App);
