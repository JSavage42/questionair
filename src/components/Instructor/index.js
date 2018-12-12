import React from "react";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";

const InstructorPage = () => (
  <div>
    <h1>Instructor</h1>
    <p>The Instructor Page is accessible by every signed in Instructor user.</p>
    <Link to={ROUTES.CREATE_TEST}>Create Test Bank</Link>
    <br />
    <Link to={ROUTES.NEW_QUESTION}>New Question</Link>
  </div>
);

const condition = authUser =>
  (authUser && authUser.roles.includes(ROLES.ADMIN)) ||
  authUser.roles.includes(ROLES.INSTRUCTOR);

export default compose(withAuthorization(condition))(InstructorPage);
