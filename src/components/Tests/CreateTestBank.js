import React from "react";
import "../../styles/components/Questions/CreateTestBank.css";
import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";
import { compose } from "recompose";
import * as ROLES from "../../constants/roles";

class CreateTestBank extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tid: "",
      totalPoints: "",
      passingScore: ""
    };
  }

  handleOnSubmit = e => {
    e.preventDefault();

    const testBankMeta = {
      tid: this.state.tid,
      totalPoints: this.state.totalPoints,
      passingScore: this.state.passingScore
    };

    this.props.firebase
      .tests(this.state.tid)
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
