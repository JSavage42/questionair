import React from "react";
import { withFirebase } from "../Firebase";

class HostTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: JSON.parse(localStorage.getItem("authUser")),
      uid: "",
      tid: "",
      questions: [],
      answersGiven: []
    };
  }

  componentDidMount() {
    this.props.firebase.tests(this.state.authUser.uid).on("value", snapshot => {
      this.setState({
        tid: snapshot.val(),
        loading: false
      });
    });
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onRadioSelect = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    return (
      <div>
        <h2>Host A Test</h2>
      </div>
    );
  }
}

export default withFirebase(HostTest);
