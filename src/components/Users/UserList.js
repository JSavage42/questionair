import React, { Component } from 'react';

// *** Constants *** //
import * as ROUTES from '../../constants/routes';

// *** Styles *** //
import '../../styles/components/Users/UserList.css';

// *** Third-Party *** //
import { Link } from 'react-router-dom';

// *** HOC and Context *** //
import { withFirebase } from '../Firebase';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    const { firebase } = this.props;
    this.setState({ loading: true });

    firebase.users().on('value', (snapshot) => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    const { firebase } = this.props;
    firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <article id="user-list">
        <h2>Enrolled Users</h2>
        {loading && <div>Loading ...</div>}
        <ul>
          {users.map((user) => (
            <li key={user.uid}>
              <span>
                <strong>ID:</strong> {user.uid}
              </span>
              <span>
                <strong>E-Mail:</strong> {user.email}
              </span>
              <span>
                <strong>Username:</strong> {user.username}
              </span>
              {user.roles && (
                <span>
                  <strong>Roles:</strong>
                  <ul>
                    {user.roles.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </span>
              )}
              <span>
                <Link
                  to={{
                    pathname: `${ROUTES.ADMIN}/${user.uid}`,
                    state: { user },
                  }}
                >
                  Details
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}

export default withFirebase(UserList);
