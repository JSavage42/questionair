import React, { Component } from "react";

// *** Constants *** //
import * as ROUTES from "../../constants/routes";

// *** Styles *** //
import "../../styles/components/Tests/HostedTestList.css";

// *** Third-Party *** //
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

// *** HOC and Context *** //
import { withFirebase } from "../Firebase";

class HostedTestList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: JSON.parse(localStorage.getItem("authUser")).uid,
      loading: true,
      tid: "",
      test: null,
      questions: [],
      userTests: [],
      tests: []
    };
  }

  componentWillMount() {
    const { authUser, userTests } = this.state;
    const { firebase } = this.props;
    this.setState({ loading: true });
    firebase.hosts().on("value", snapshot => {
      const testsObject = snapshot.val();
      if (testsObject === null) {
        return;
      } else {
        const testsList = Object.keys(testsObject).map(key => ({
          ...testsObject[key],
          uid: key
        }));

        this.setState({
          tests: testsList
        });

        for (const value of Object.values(testsList)) {
          if (value.tid.includes(authUser.substring(0, 4))) {
            userTests.push(value);
          }
        }

        this.setState({ loading: false });
      }
    });
  }

  componentWillUnmount() {
    const { firebase } = this.props;
    firebase.tests().off();
    firebase.host().off();
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { userTests, loading } = this.state;

    return (
      <section id="instructor-hostedtest-list">
        {loading && <div>No available quizzes.</div>}
        {userTests && (
          <ul>
            {userTests.length !== 0 &&
              userTests.map(test => (
                <Link
                  to={{
                    pathname: `${ROUTES.TESTS}/i/${test.tid}`,
                    state: test.tid
                  }}
                  key={test.tid}
                >
                  <li>Quiz ID Number: {test.tid}</li>
                </Link>
              ))}
          </ul>
        )}
      </section>
    );
  }
}

export default compose(
  withRouter,
  withFirebase
)(HostedTestList);
