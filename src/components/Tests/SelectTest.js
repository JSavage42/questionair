import React from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import "../../styles/components/Student/TakeTest.css";

class TakeTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      availableTests: []
    };
  }

  componentDidMount() {
    this.props.firebase.tests().on("value", snapshot => {
      let tests = snapshot.val();
      let newState = [];
      Object.entries(tests).forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        console.log(key, value);
        newState.push({ value });
        console.log(newState);
      });
      this.setState({
        availableTests: newState
      });
    });
  }

  render() {
    console.log(this.state.availableTests);
    return (
      <main id="taketest">
        <h2>Take A Test</h2>
        <div className="select-test">
          <ul>
            {this.state.availableTests.map(test => (
              <li key={test.value.tid}>
                <Link to={`/test/take/${test.value.tid}`}>
                  {test.value.tid}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
}

export default withFirebase(TakeTest);
