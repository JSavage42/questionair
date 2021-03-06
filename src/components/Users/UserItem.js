import React, { Component } from 'react';

// *** Styles *** //
import '../../styles/components/Users/UserItem.css';

// *** HOC and Context *** //
import { withFirebase } from '../Firebase';
class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: null,
      uid: null,
      ...props.location.state,
    };
  }

  componentDidMount() {
    const { match, firebase } = this.props;
    firebase.user(match.params.id).on('value', (snapshot) => {
      this.setState({
        user: snapshot.val(),
        uid: match.params.id,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    const { match, firebase } = this.props;
    firebase.user(match.params.id).off();
  }

  onSendPasswordResetEmail = () => {
    const { user } = this.state;
    const { firebase } = this.props;
    firebase.doPasswordReset(user.email);
  };

  handleRequestApproval = (e) => {
    const { uid } = this.state;
    const { firebase } = this.props;
    let key;
    if (e.target.id === 'ADMIN') {
      key = 0;
    } else {
      key = 1;
    }
    firebase
      .user(uid)
      .child(`roles`)
      .child(key)
      .set(e.target.id);
    firebase
      .user(uid)
      .child(`requests`)
      .child(key)
      .remove();
  };

  handleRoleRemoval = (e) => {
    const { uid } = this.state;
    const { firebase } = this.props;
    let key;
    if (e.target.id === 'ADMIN') {
      key = 0;
    } else {
      key = 1;
    }
    firebase
      .user(uid)
      .child('roles')
      .child(key)
      .remove();

    console.log(key);
  };

  render() {
    const { user, loading, uid } = this.state;

    return (
      <main id="user-item">
        <h2>{user.username}</h2>
        {loading && <div>Loading ...</div>}

        {user && (
          <div>
            <span>
              <b>ID:</b> {uid}
            </span>
            <span>
              <b>E-Mail:</b> {user.email}
            </span>
            <span>
              <b>Username:</b> {user.username}
            </span>
            {user.requests && (
              <span id="requests">
                <b>Requests: </b>(Click to Approve)
                <ul>
                  {user.requests.map((req) => (
                    <li key={req}>
                      <input
                        id={req}
                        type="button"
                        value={req}
                        onClick={this.handleRequestApproval}
                      />
                    </li>
                  ))}
                </ul>
              </span>
            )}
            {user.roles && (
              <span>
                <b>Roles: </b>(Click to Remove)
                <ul>
                  {user.roles.map((role) => (
                    <li key={role}>
                      <input
                        id={role}
                        type="button"
                        value={role}
                        onClick={this.handleRoleRemoval}
                      />
                    </li>
                  ))}
                </ul>
              </span>
            )}
            <span>
              <input
                value="Send Password Reset"
                type="button"
                onClick={this.onSendPasswordResetEmail}
              />
            </span>
          </div>
        )}
      </main>
    );
  }
}

export default withFirebase(UserItem);
