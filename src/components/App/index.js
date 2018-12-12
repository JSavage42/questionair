import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import InstructorPage from "../Instructor";
import StudentPage from "../Student";
import { CreateTestBank, TakeTest, SelectTest } from "../Tests";
import { NewQuestion } from "../Questions";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.INSTRUCTOR} component={InstructorPage} />
        <Route path={ROUTES.STUDENT} component={StudentPage} />
        <Route path={ROUTES.CREATE_TEST} component={CreateTestBank} />
        <Route path={ROUTES.NEW_QUESTION} component={NewQuestion} />
        <Route path={ROUTES.SELECT_TEST} component={SelectTest} />
        <Route path={ROUTES.TAKE_TEST} component={TakeTest} />
      </Switch>
    </div>
  </Router>
);

export default withAuthentication(App);