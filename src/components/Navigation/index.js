import React from 'react';

// *** Constants *** //
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

// *** Styles *** //
import logo from '../../images/logo.svg';
import '../../styles/components/Navigation.css';

// *** Third-Party *** //
import { Link } from 'react-router-dom';

// *** HOC and Context *** //
import { AuthUserContext } from '../Session';

// *** Components *** //
import SignOutButton from '../SignOut';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {(authUser) =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <header>
    <img src={logo} alt="Question Air" title="Question Air" />
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
          <Link to={ROUTES.STUDENT}>Student</Link>
        </li>
        {(authUser.roles.includes(ROLES.ADMIN) ||
          authUser.roles.includes(ROLES.INSTRUCTOR)) && (
          <li>
            <Link to={ROUTES.INSTRUCTOR}>Instructor</Link>
          </li>
        )}
        {authUser.roles.includes(ROLES.ADMIN) && (
          <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
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
