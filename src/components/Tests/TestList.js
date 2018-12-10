import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

class TestList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tests: [],

      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.tests().on('value', snapshot => {
      const testsObject = snapshot.val();

      const testsList = Object.keys(testsObject).map(key => ({
        ...testsObject[key],
        uid: key,
      }));

      this.setState({
        tests: testsList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.tests().off();
  }

  render() {
    const { tests, loading } = this.state;
    return (
      <div>
        <h2>Tests</h2>
        {loading && <div>Loading ...</div>}
        <ul>
          {tests.map(test => (
            <li key={test.uid}>
              <span>
                <strong>ID:</strong> {test.tid}
              </span>
              <span>
                <Link
                  to={{
                    pathname: `${ROUTES.TESTS}/${test.tid}`,
                    state: { test },
                  }}
                >
                  Details
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withFirebase(TestList);
