import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Tests/TestList.css';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

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
    this.setState({ loading: true });
    this.props.firebase.tests(this.state.authUser.uid).on('value', snapshot => {
      const testsObject = snapshot.val();
      if (testsObject === null) {
        this.setState({ loading: false });
      } else {
        const testsList = Object.keys(testsObject).map(key => ({
          ...testsObject[key],
          uid: key,
        }));

        this.setState({
          tests: testsList,
          loading: false,
        });
        for (const [key, value] of Object.entries(testsList)) {
          if (value.tid.includes(this.state.authUser.uid.substring(0, 4))) {
            this.state.userTests.push(value);
            console.log(this.state.userTests);
          }
        }
      }
    });
  }

  componentWillUnmount() {
    this.props.firebase.tests().off();
    this.props.firebase.host().off();
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleHostTest = e => {
    e.preventDefault();
    const { authUser, tid, test } = this.state;

    // *** Get Test from test API ***
    this.props.firebase.test(authUser.uid, tid).on('value', snapshot => {
      this.setState({
        test: snapshot.val(),
        questions: Object.values(snapshot.val().questions),
      });

      // *** Create Hosted Test ***
      this.props.firebase.host(authUser.uid, tid).set({
        test,
      });
    });
  };

  render() {
    const { userTests, loading } = this.state;
    return (
      <section id="instrurctor-test-list">
        <article id="test-list">
          <h2>Available Quizzes</h2>
          {loading && <div>Loading ...</div>}
          <ul>
            {userTests &&
              userTests.map(test => (
                <Link
                  to={{
                    pathname: `${ROUTES.TESTS}/${test.tid}`,
                    state: { test, authUser: this.state.authUser },
                  }}
                  key={test.tid}
                >
                  <li>Quiz ID Number: {test.tid}</li>
                </Link>
              ))}
          </ul>
        </article>
        {(this.state.authUser &&
          this.state.authUser.roles.includes(ROLES.ADMIN)) ||
        this.state.authUser.roles.includes(ROLES.INSTRUCTOR) ? (
          <article id="tests-host">
            <h2>Host A Test</h2>
            <form onSubmit={this.handleHostTest}>
              <input
                type="number"
                name="tid"
                value={this.state.tid}
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
