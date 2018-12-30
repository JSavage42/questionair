import React, { Component } from 'react';

// *** Constants *** //
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

// *** Styles *** //
import '../../styles/components/Tests/TestList.css';

// *** Third-Party *** //
import { Link } from 'react-router-dom';

// *** HOC and Context *** //
import { withFirebase } from '../Firebase';

class TestList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tests: [],
      authUser: JSON.parse(localStorage.getItem('authUser')),
      loading: false,
      tid: '',
      test: null,
      questions: [],
      userTests: [],
    };
  }

  componentDidMount() {
    const { authUser, userTests } = this.state;
    const { firebase } = this.props;
    this.setState({ loading: true });
    firebase.tests(authUser.uid).on('value', (snapshot) => {
      const testsObject = snapshot.val();
      if (testsObject === null) {
        this.setState({ loading: false });
      } else {
        const testsList = Object.keys(testsObject).map((key) => ({
          ...testsObject[key],
          uid: key,
        }));

        this.setState({
          tests: testsList,
          loading: false,
        });
        for (const value of Object.values(testsList)) {
          if (value.tid.includes(authUser.uid.substring(0, 4))) {
            userTests.push(value);
          }
        }
      }
    });
  }

  componentWillUnmount() {
    const { firebase } = this.props;
    firebase.tests().off();
    firebase.host().off();
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleHostTest = (e) => {
    e.preventDefault();
    const { tid, test } = this.state;
    const { firebase } = this.props;

    // *** Get Test from test API *** //
    firebase.test(tid).on('value', (snapshot) => {
      this.setState({
        test: snapshot.val(),
        questions: Object.values(snapshot.val().questions),
      });
    });
    // *** Create Hosted Test *** //
    firebase.host(tid).set(test);
  };

  render() {
    const { userTests, loading, authUser, tid } = this.state;
    return (
      <section id="instructor-test-list">
        <article id="test-list">
          <h2>Available Quizzes</h2>
          {loading && <div>Loading ...</div>}
          <ul>
            {userTests &&
              userTests.map((test) => (
                <Link
                  to={{
                    pathname: `${ROUTES.TESTS}/${test.tid}`,
                    state: { test, authUser },
                  }}
                  key={test.tid}
                >
                  <li>Quiz ID Number: {test.tid}</li>
                </Link>
              ))}
          </ul>
        </article>
        {(authUser && authUser.roles.includes(ROLES.ADMIN)) ||
        authUser.roles.includes(ROLES.INSTRUCTOR) ? (
          <article id="tests-host">
            <h2>Host A Test</h2>
            <form onSubmit={this.handleHostTest}>
              <input
                type="text"
                name="tid"
                value={tid}
                placeholder="Test ID"
                onChange={this.handleOnChange}
              />
              <input type="submit" name="submit" value="Submit" />
            </form>
          </article>
        ) : (
          ''
        )}
      </section>
    );
  }
}

export default withFirebase(TestList);
