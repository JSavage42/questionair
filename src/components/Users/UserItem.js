import React, { Component } from "react";
import "../../styles/components/Users/UserItem.css";
import { withFirebase } from "../Firebase";

class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: null,
      ...props.location.state
    };
  }

  componentDidMount() {
    if (this.state.user) {
      return;
    }

    this.setState({ loading: true });

    this.props.firebase
      .user(this.props.match.params.id)
      .on("value", snapshot => {
        this.setState({
          user: snapshot.val(),
          loading: false
        });
      });
    console.log(this.state.user);
  }

  componentWillUnmount() {
    this.props.firebase.user(this.props.match.params.id).off();
  }

  onSendPasswordResetEmail = () => {
    this.props.firebase.doPasswordReset(this.state.user.email);
  };

  handleRequestApproval = e => {
    let key;
    if (e.target.id === "ADMIN") {
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

  render() {
    const { user, loading } = this.state;

    return (
      <article id="user-item">
        <h2>{this.state.user.username}</h2>
        {loading && <div>Loading ...</div>}

        {user && (
          <div>
            <span>
              <b>ID:</b> {user.uid}
            </span>
            <span>
              <b>E-Mail:</b> {user.email}
            </span>
            <span>
              <b>Username:</b> {user.username}
            </span>
            {user.requests && (
              <span>
                <b>Requests: </b>
                <p>
                  <b>Click to approve</b>
                </p>
                <ul>
                  {user.requests.map(req => (
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
