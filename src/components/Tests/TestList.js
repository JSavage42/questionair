import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Tests/TestList.css";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

class TestList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tests: [],
      authUser: JSON.parse(localStorage.getItem("authUser")),
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.tests(this.state.authUser.uid).on("value", snapshot => {
      const testsObject = snapshot.val();
      if (testsObject === null) {
        this.setState({ loading: false });
      } else {
        const testsList = Object.keys(testsObject).map(key => ({
          ...testsObject[key],
          uid: key
        }));

        this.setState({
          tests: testsList,
          loading: false
        });
      }
    });
  }

  componentWillUnmount() {
    this.props.firebase.tests().off();
  }

  render() {
    const { tests, loading } = this.state;
    return (
      <article id='test-list'>
        <h2>Available Quizzes</h2>
        {loading && <div>Loading ...</div>}
        <ul>
          {tests &&
            tests.map(test => (
              <Link
                to={{
                  pathname: `${ROUTES.TESTS}/${test.tid}`,
                  state: { test }
                }}
                key={test.tid}
              >
                <li>
                  Take Quiz ID Number:
                  {test.tid}
                </li>
              </Link>
            ))}
        </ul>
      </article>
    );
  }
}

export default withFirebase(TestList);
