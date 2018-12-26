import React, { Component } from 'react';
import '../../styles/components/Users/UserItem.css';
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
    this.props.firebase
      .user(this.props.match.params.id)
      .on('value', (snapshot) => {
        this.setState({
          user: snapshot.val(),
          uid: this.props.match.params.id,
          loading: false,
        });
      });
  }

  componentWillUnmount() {
    this.props.firebase.user(this.props.match.params.id).off();
  }

  onSendPasswordResetEmail = () => {
    this.props.firebase.doPasswordReset(this.state.user.email);
  };

  handleRequestApproval = (e) => {
    let key;
    if (e.target.id === 'ADMIN') {
      key = 0;
    } else {
      key = 1;
    }
    this.props.firebase
      .user(this.state.user.uid)
      .child(`roles`)
      .child(key)
      .set(e.target.id);
  };

  handleRoleRemoval = (e) => {
    let key;
    if (e.target.id === 'ADMIN') {
      key = 0;
    } else {
      key = 1;
    }
    this.props.firebase
      .user(this.state.uid)
      .child('roles')
      .child(key)
      .remove();

    console.log(key);
  };

  render() {
    const { user, loading, uid } = this.state;
    console.log(this.state.uid);

    return (
      <article id="user-item">
        <h2>{this.state.user.username}</h2>
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
                      <button
                        id={req}
                        type="button"
                        onClick={this.handleRequestApproval}
                      >
                        {req}
                      </button>
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
                      <button
                        id={role}
                        type="button"
                        onClick={this.handleRoleRemoval}
                      >
                        {role}
                      </button>
                    </li>
                  ))}
                </ul>
              </span>
            )}
            <span>
              <button type="button" onClick={this.onSendPasswordResetEmail}>
                Send Password Reset
              </button>
            </span>
          </div>
        )}
      </article>
    );
  }
}

export default withFirebase(UserItem);
