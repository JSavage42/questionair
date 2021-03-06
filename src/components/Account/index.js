import React, { Component } from 'react';

// *** Third-Party *** //
import { compose } from 'recompose';

// *** Styles *** //
import '../../styles/components/Account/Account.css';

// *** HOC and Context *** //
import { AuthUserContext, withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

// *** Components *** //
import PasswordChangeForm from '../PasswordChange';
import { PasswordForgetForm } from '../PasswordForget';

const SIGN_IN_METHODS = [
  {
    id: 'password',
    provider: null,
  },
  {
    id: 'google.com',
    provider: 'googleProvider',
  },
  {
    id: 'facebook.com',
    provider: 'facebookProvider',
  },
  {
    id: 'twitter.com',
    provider: 'twitterProvider',
  },
];

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <main id="account">
        <h2>Account: {authUser.email}</h2>
        <PasswordForgetForm />
        <PasswordChangeForm />
        <LoginManagement authUser={authUser} />
        <PermissionRequests />
      </main>
    )}
  </AuthUserContext.Consumer>
);

class LoginManagementBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSignInMethods: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchSignInMethods();
  }

  fetchSignInMethods = () => {
    const { firebase, authUser } = this.props;
    firebase.auth
      .fetchSignInMethodsForEmail(authUser.email)
      .then((activeSignInMethods) =>
        this.setState({ activeSignInMethods, error: null }),
      )
      .catch((error) => this.setState({ error }));
  };

  onSocialLoginLink = (provider) => {
    const { firebase } = this.props;
    firebase.auth.currentUser
      .linkWithPopup(firebase[provider])
      .then(this.fetchSignInMethods)
      .catch((error) => this.setState({ error }));
  };

  onDefaultLoginLink = (password) => {
    const { firebase } = this.props;
    const credential = firebase.emailAuthProvider.credential(
      this.props.authUser.email,
      password,
    );

    firebase.auth.currentUser
      .linkAndRetrieveDataWithCredential(credential)
      .then(this.fetchSignInMethods)
      .catch((error) => this.setState({ error }));
  };

  onUnlink = (providerId) => {
    const { firebase } = this.props;
    firebase.auth.currentUser
      .unlink(providerId)
      .then(this.fetchSignInMethods)
      .catch((error) => this.setState({ error }));
  };

  render() {
    const { activeSignInMethods, error } = this.state;

    return (
      <article id="signin-methods">
        <span>Sign In Methods:</span>
        <ul>
          {SIGN_IN_METHODS.map((signInMethod) => {
            const onlyOneLeft = activeSignInMethods.length === 1;
            const isEnabled = activeSignInMethods.includes(signInMethod.id);

            return (
              <li key={signInMethod.id}>
                {signInMethod.id === 'password' ? (
                  <DefaultLoginToggle
                    onlyOneLeft={onlyOneLeft}
                    isEnabled={isEnabled}
                    signInMethod={signInMethod}
                    onLink={this.onDefaultLoginLink}
                    onUnlink={this.onUnlink}
                  />
                ) : (
                  <SocialLoginToggle
                    onlyOneLeft={onlyOneLeft}
                    isEnabled={isEnabled}
                    signInMethod={signInMethod}
                    onLink={this.onSocialLoginLink}
                    onUnlink={this.onUnlink}
                  />
                )}
              </li>
            );
          })}
        </ul>
        {error && error.message}
      </article>
    );
  }
}

const SocialLoginToggle = ({
  onlyOneLeft,
  isEnabled,
  signInMethod,
  onLink,
  onUnlink,
}) =>
  isEnabled ? (
    <button
      type="button"
      onClick={() => onUnlink(signInMethod.id)}
      disabled={onlyOneLeft}
    >
      Deactivate {signInMethod.id}
    </button>
  ) : (
    <button type="button" onClick={() => onLink(signInMethod.provider)}>
      Link {signInMethod.id}
    </button>
  );

class DefaultLoginToggle extends Component {
  constructor(props) {
    super(props);

    this.state = { passwordOne: '', passwordTwo: '' };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;
    const { onLink } = this.props;
    event.preventDefault();

    onLink(passwordOne);
    this.setState({ passwordOne: '', passwordTwo: '' });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { onlyOneLeft, isEnabled, signInMethod, onUnlink } = this.props;

    const { passwordOne, passwordTwo } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

    return isEnabled ? (
      <button
        type="button"
        onClick={() => onUnlink(signInMethod.id)}
        disabled={onlyOneLeft}
      >
        Deactivate {signInMethod.id}
      </button>
    ) : (
      <form onSubmit={this.onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        />

        <button disabled={isInvalid} type="submit">
          Link {signInMethod.id}
        </button>
      </form>
    );
  }
}

class PermissionRequestsBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: null,
    };
  }

  componentDidMount() {
    const { firebase } = this.props;
    const uid = firebase.auth.currentUser.uid;
    this.setState({ uid });
  }

  handleRequests = (e) => {
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
      .child(`requests`)
      .child(key)
      .set(e.target.id);
  };

  render() {
    return (
      <article id="permission-request">
        <b>Requests: </b>(Click to send request)
        <button id="ADMIN" type="button" onClick={this.handleRequests}>
          ADMIN
        </button>
        <button id="INSTRUCTOR" type="button" onClick={this.handleRequests}>
          INSTRUCTOR
        </button>
      </article>
    );
  }
}

const PermissionRequests = withFirebase(PermissionRequestsBase);

const LoginManagement = withFirebase(LoginManagementBase);

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition))(AccountPage);
