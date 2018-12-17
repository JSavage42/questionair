import React from "react";
import "../../styles/components/Tests/CreateTestBank.css";
import { withFirebase } from "../Firebase";

class CreateTestBank extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: JSON.parse(localStorage.getItem("authUser")),
      error: "",
      tid: "",
      totalPoints: "",
      passingScore: ""
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    this.props.firebase.auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user, error: null });
      }
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const testBankMeta = {
      tid: this.state.tid,
      totalPoints: this.state.totalPoints,
      passingScore: this.state.passingScore
    };

    this.props.firebase
      .user(this.state.authUser.uid)
      .child("tests")
      .child(this.state.tid)
      .set(testBankMeta);

    this.setState({
      tid: "",
      totalPoints: "",
      passingScore: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <main id="create-test-bank">
        <h2>Create Test Bank</h2>
        <p>Instructor Name: {this.state.authUser.username}</p>
        <form id="newTestBank" onSubmit={this.handleOnSubmit}>
          <label>Test Bank ID Number</label>
          <input
            type="number"
            value={this.state.testBankId}
            name="tid"
            onChange={this.handleChange}
            placeholder="Test Bank ID Number"
          />
          <label>Total Points</label>
          <input
            type="number"
            value={this.state.totalPoints}
            name="totalPoints"
            onChange={this.handleChange}
            placeholder="Total Points"
          />
          <label>Passing Score</label>
          <input
            type="number"
            value={this.state.passingScore}
            name="passingScore"
            onChange={this.handleChange}
            placeholder="Passing Score"
          />
          <input type="submit" name="submit" value="Submit" />
          <input type="reset" name="reset" value="Reset" />
        </form>
      </main>
    );
  }
}

export default withFirebase(CreateTestBank);
