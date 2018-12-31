import React from 'react';

// *** Constants *** //
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

// *** Styles *** //
import '../../styles/components/Instructor/InstructorPage.css';

// *** Third-Party *** //
import { compose } from 'recompose';

// *** HOC and Context *** //
import { withAuthorization } from '../Session';
import { withRouter } from 'react-router-dom';

// *** Components *** //
import { TestList } from '../Tests';

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

  handleLinkClick = (e) => {
    const { history } = this.props;
    let route;
    if (e.target.name === 'CREATE_TEST') {
      route = ROUTES.CREATE_TEST;
    } else {
      route = ROUTES.NEW_QUESTION;
    }
    history.push(route);
  };

  render() {
    return (
      <main id="instructor-page">
        <h2>Instructor</h2>
        <p>
          The Instructor Page is accessible by every signed in Instructor user.
        </p>
        <input
          type="button"
          value="Create Test Bank"
          name="CREATE_TEST"
          onClick={this.handleLinkClick}
        />
        <input
          type="button"
          value="New Question"
          name="NEW_QUESTION"
          onClick={this.handleLinkClick}
        />

        <TestList />

        <h3>Hosted Tests</h3>
        <input
          type="button"
          value="End Hosted Tests"
          className="endHostedTests"
          onClick={this.handleEndHostedTests}
        />
      </main>
    );
  }
}

const condition = (authUser) =>
  (authUser && authUser.roles.includes(ROLES.ADMIN)) ||
  authUser.roles.includes(ROLES.INSTRUCTOR);

export default compose(
  withAuthorization(condition),
  withRouter,
)(InstructorPage);
