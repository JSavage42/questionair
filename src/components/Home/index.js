import React, { Component } from "react";

// *** Third-Party *** //
import { compose } from "recompose";

// *** Styles *** //
import "../../styles/components/Home/Home.css";

// *** HOC and Context *** //
import { withAuthorization } from "../Session";
import { withFirebase } from "../Firebase";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null
    };
  }

  componentDidMount() {
    const { firebase } = this.props;
    firebase.users().on("value", snapshot => {
      this.setState({
        users: snapshot.val()
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    return (
      <main id="home">
        <p>
          Welcome to
          <br />
          <span id="title">Question Air</span>
        </p>
      </main>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(HomePage);
