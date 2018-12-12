import React from "react";
import "../../styles/components/Questions/CreateTestBank.css";
import { withFirebase } from "../Firebase";

class CreateTestBank extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
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
      .user(this.state.user.uid)
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
      <main>
        <h2>Create Test Bank</h2>
        <p>Instructor Email: {this.state.user.email}</p>
        <form id="newTestBank" onSubmit={this.handleOnSubmit}>
          <label>Test Bank ID Number</label>
          <input
            type="number"
            value={this.state.testBankId}
            name="tid"
            onChange={this.handleChange}
          />
          <label>Total Points</label>
          <input
            type="number"
            value={this.state.totalPoints}
            name="totalPoints"
            onChange={this.handleChange}
          />
          <label>Passing Score</label>
          <input
            type="number"
            value={this.state.passingScore}
            name="passingScore"
            onChange={this.handleChange}
          />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </main>
    );
  }
}

export default withFirebase(CreateTestBank);
