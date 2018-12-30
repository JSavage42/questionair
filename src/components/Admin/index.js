import React from 'react';

// *** Constants *** //
import * as ROLES from '../../constants/roles';

// *** Third-Party *** //
import { compose } from 'recompose';

// *** Styles *** //
import '../../styles/components/Admin/Admin.css';

// *** HOC and Context *** //
import { withAuthorization } from '../Session';

// *** Components *** //
import { UserList } from '../Users';

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
