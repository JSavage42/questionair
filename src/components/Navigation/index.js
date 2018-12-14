import React from "react";
import { Link } from "react-router-dom";

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import '../../styles/components/Navigation.css';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <header>
  <h1>Question Air</h1>
  <nav>
    <ul>
     <li>
       <Link to={ROUTES.LANDING}>Landing</Link>
     </li>
     <li>
       <Link to={ROUTES.HOME}>Home</Link>
     </li>
     <li>
       <Link to={ROUTES.ACCOUNT}>Account</Link>
     </li>
     <li>
       <Link to={ROUTES.STUDENT}>Student</Link>
     </li>
     {(authUser.roles.includes(ROLES.ADMIN) || authUser.roles.includes(ROLES.INSTRUCTOR)) && (
       <li>
         <Link to={ROUTES.INSTRUCTOR}>Instructor</Link>
       </li>
     )}
     {authUser.roles.includes(ROLES.ADMIN) && (
       <li>
         <Link to={ROUTES.ADMIN}>Admin</Link>
       </li>
     )}
     <li>
       <SignOutButton />
     </li>
    </ul>
  </nav>
  </header>
);

const NavigationNonAuth = () => (
  <header>
  <h1>Question Air</h1>
  <nav>
    <ul>
     <li>
       <Link to={ROUTES.LANDING}>Landing</Link>
     </li>
     <li>
       <Link to={ROUTES.SIGN_IN}>Sign In</Link>
     </li>
    </ul>
  </nav>
  </header>

);

export default Navigation;
