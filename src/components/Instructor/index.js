import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization } from '../Session';
import { UserList, UserItem } from '../Users';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const InstructorPage = () => (
  <div>
    <h1>Instructor</h1>
    <p>The Instructor Page is accessible by every signed in Instructor user.</p>

    <Switch>
      <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
      <Route exact path={ROUTES.ADMIN} component={UserList} />
    </Switch>
  </div>
);

const condition = authUser =>
  (authUser && authUser.roles.includes(ROLES.ADMIN)) || authUser.roles.includes(ROLES.INSTRUCTOR);

export default compose(withAuthorization(condition))(InstructorPage);
