import React from "react";
import { Link } from "react-router-dom";
import { compose } from "recompose";

import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";

const StudentPage = () => (
  <div>
    <h1>Student</h1>
    <p>The Student Page is accessible by every signed in user.</p>
    <Link to={ROUTES.TAKE_TEST}>Take Test</Link>
  </div>
);

const condition = authUser =>
  (authUser && authUser.roles.includes(ROLES.ADMIN)) ||
  authUser.roles.includes(ROLES.INSTRUCTOR) ||
  authUser.roles.includes(ROLES.STUDENT);

export default compose(withAuthorization(condition))(StudentPage);
