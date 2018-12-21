import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import { TestList } from '../Tests';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import '../../styles/components/Instructor/InstructorPage.css';

const InstructorPage = () => (
  <main id='instructor-page'>
    <h2>Instructor</h2>
    <p>The Instructor Page is accessible by every signed in Instructor user.</p>
    <Link to={ROUTES.CREATE_TEST}>Create Test Bank</Link>
    <br />
    <Link to={ROUTES.NEW_QUESTION}>New Question</Link>

    <TestList />
  </main>
);

const condition = authUser =>
  (authUser && authUser.roles.includes(ROLES.ADMIN)) ||
  authUser.roles.includes(ROLES.INSTRUCTOR);

export default compose(withAuthorization(condition))(InstructorPage);
