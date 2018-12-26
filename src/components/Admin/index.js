import React from 'react';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import { UserList } from '../Users';
import * as ROLES from '../../constants/roles';
import '../../styles/components/Admin/Admin.css';

const AdminPage = () => (
  <main id="admin-page">
    <h2>Admin</h2>
    <p>The Admin Page is accessible by every signed in admin user.</p>

    <UserList />
  </main>
);

const condition = (authUser) =>
  authUser && authUser.roles.includes(ROLES.ADMIN);

export default compose(withAuthorization(condition))(AdminPage);
