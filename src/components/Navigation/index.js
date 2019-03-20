import React from "react";

// *** Constants *** //
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";

// *** Styles *** //
import logo from "../../images/logo.svg";
import "../../styles/components/Navigation.css";

// *** Third-Party *** //
import { NavLink as Link } from "react-router-dom";

// *** HOC and Context *** //
import { AuthUserContext } from "../Session";

// *** Components *** //
import SignOutButton from "../SignOut";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <header>
    <div id="logo-title">
      <img src={logo} alt="Question Air" title="Question Air" />
      <h1>
        Question <span id="air">Air</span>
      </h1>
    </div>
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.HOME} exact activeClassName="selected">
            Home
          </Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT} activeClassName="selected">
            Account
          </Link>
        </li>
        <li>
          <Link to={ROUTES.STUDENT} activeClassName="selected">
            Student
          </Link>
        </li>
        {(Object.values(authUser.roles).includes(ROLES.INSTRUCTOR) ||
          Object.values(authUser.roles).includes(ROLES.ADMIN)) && (
          <li>
            <Link to={ROUTES.INSTRUCTOR} activeClassName="selected">
              Instructor
            </Link>
          </li>
        )}
        {Object.values(authUser.roles).includes(ROLES.ADMIN) && (
          <li>
            <Link to={ROUTES.ADMIN} activeClassName="selected">
              Admin
            </Link>
          </li>
        )}
      </ul>
      <SignOutButton />
    </nav>
  </header>
);

const NavigationNonAuth = () => (
  <header>
    <h1>Question Air</h1>
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
