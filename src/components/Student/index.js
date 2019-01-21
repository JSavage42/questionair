import React from "react";

// *** Constants *** //
import * as ROLES from "../../constants/roles";

// *** Styles *** //
import "../../styles/components/Student/StudentDashboard.css";

// *** Third-Party *** //
import { compose } from "recompose";

// *** HOC and Context *** //
import { withAuthorization, withAuthentication } from "../Session";
import { withFirebase } from "../Firebase";

class StudentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tid: "",
      uid: "",
      authUser: JSON.parse(localStorage.getItem(`authUser`))
    };
  }

  componentWillMount() {
    const { authUser } = this.state;
    this.setState({ uid: authUser.uid });
  }

  handleStartTest = e => {
    e.preventDefault();
    const { tid, uid } = this.state;
    const { history } = this.props;
    history.push({
      pathname: `tests/s/${tid}`,
      state: { tid, uid }
    });
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { tid } = this.state;
    return (
      <main id="student">
        <h2>Student</h2>
        <h3>Take a Quiz</h3>
        <form onSubmit={this.handleStartTest}>
          <label>
            Enter the given Quiz ID number
            <input
              type="text"
              name="tid"
              value={tid}
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
  (authUser && Object.values(authUser.roles).includes(ROLES.ADMIN)) ||
  Object.values(authUser.roles).includes(ROLES.INSTRUCTOR) ||
  Object.values(authUser.roles).includes(ROLES.STUDENT);

export default compose(
  withAuthorization(condition),
  withAuthentication,
  withFirebase
)(StudentPage);
