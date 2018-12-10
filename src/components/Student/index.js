import React from 'react';
import { compose } from 'recompose';

import { withAuthorization } from '../Session';
import * as ROLES from '../../constants/roles';
import { TestList } from '../Tests';

const StudentPage = () => (
  <div>
    <h1>Student</h1>
    <p>The Student Page is accessible by every signed in Student/Instructor/Admin user.</p>
    <TestList />
  </div>
);

const condition = authUser =>
  (authUser && authUser.roles.includes(ROLES.ADMIN)) ||
  authUser.roles.includes(ROLES.INSTRUCTOR) ||
  authUser.roles.includes(ROLES.STUDENT);

export default compose(withAuthorization(condition))(StudentPage);
