import React from 'react';
import { compose } from 'recompose';
import '../../styles/components/Student/StudentDashboard.css';
import { withAuthorization, withAuthentication } from '../Session';
import * as ROLES from '../../constants/roles';

class StudentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tid: '',
    };
  }

  handleStartTest = e => {
    e.preventDefault();
    const { tid } = this.state;
    console.log(this.props);
    this.props.history.push({
      pathname: `tests/s/${tid}`,
      state: { tid },
    });
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <main id="student">
        <h2>Student</h2>
        <h3>Take a Test</h3>
        <form onSubmit={this.handleStartTest}>
          <label>
            Enter the given Test ID number
            <input
              type="text"
              name="tid"
              value={this.state.tid}
              onChange={this.handleOnChange}
              placeholder="Test ID"
            />
          </label>
          <input type="submit" value="Submit" name="submit" />
        </form>
      </main>
    );
  }
}

const condition = authUser =>
  (authUser && authUser.roles.includes(ROLES.ADMIN)) ||
  authUser.roles.includes(ROLES.INSTRUCTOR) ||
  authUser.roles.includes(ROLES.STUDENT);

export default compose(
  withAuthorization(condition),
  withAuthentication,
)(StudentPage);
