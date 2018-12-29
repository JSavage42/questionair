import React, { Component } from 'react';
import { compose } from 'recompose';
import '../../styles/components/Home/Home.css';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    const { firebase } = this.props;
    firebase.users().on('value', (snapshot) => {
      this.setState({
        users: snapshot.val(),
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    return (
      <main id="home">
        <h2>Home Page</h2>
        <p>Welcome to Question Air.</p>
      </main>
    );
  }
}

const condition = (authUser) => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition),
)(HomePage);
