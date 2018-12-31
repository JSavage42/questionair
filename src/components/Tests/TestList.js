import React, { Component } from 'react';

// *** Constants *** //
import * as ROUTES from '../../constants/routes';

// *** Styles *** //
import '../../styles/components/Tests/TestList.css';

// *** Third-Party *** //
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

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
        return;
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

  render() {
    const { userTests, loading, authUser } = this.state;
    return (
      <section id="instructor-test-list">
        {loading && <div>Loading ...</div>}
        {userTests.length !== 0 && (
          <article id="test-list">
            <h3>Available Quizzes</h3>
            <ul>
              {userTests.map((test) => (
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
        )}
      </section>
    );
  }
}

export default compose(
  withRouter,
  withFirebase,
)(TestList);
