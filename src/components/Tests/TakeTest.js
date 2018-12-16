import React from "react";
import { withFirebase } from "../Firebase";

class TakeTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: JSON.parse(localStorage.getItem("authUser"))
    };
  }

  componentDidMount() {}

  render() {
    return <h2>Take the Test</h2>;
  }
}

export default withFirebase(TakeTest);
