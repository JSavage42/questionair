import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import { TestList } from '../Tests';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import '../../styles/components/Instructor/InstructorPage.css';

class InstructorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: JSON.parse(localStorage.getItem('authUser')).uid,
    };
  }

  handleEndHostedTests = () => {
    const { authUser } = this.state;
    const { firebase } = this.props;
    firebase.hosts(authUser).remove();
  };

  render() {
    return (
      <main id="instructor-page">
        <h2>Instructor</h2>
        <p>
          The Instructor Page is accessible by every signed in Instructor user.
        </p>
        <Link to={ROUTES.CREATE_TEST}>Create Test Bank</Link>
        <br />
        <Link to={ROUTES.NEW_QUESTION}>New Question</Link>

        <TestList />
        <input
          type="button"
          value="End Hosted Tests"
          onClick={this.handleEndHostedTests}
        />
      </main>
    );
  }
}

const condition = (authUser) =>
  (authUser && authUser.roles.includes(ROLES.ADMIN)) ||
  authUser.roles.includes(ROLES.INSTRUCTOR);

export default compose(withAuthorization(condition))(InstructorPage);
