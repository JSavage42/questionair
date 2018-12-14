import React from "react";
import HostTest from "./HostTest";
import * as ROLES from "../../constants/roles";
import { withFirebase } from "../Firebase";

class TakeTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: JSON.parse(localStorage.getItem("authUser"))
    };
  }

  componentDidMount() {
    if (authUser => authUser && authUser.roles.includes(ROLES.INSTRUCTOR)) {
      return <HostTest />;
    }
  }

  render() {
    return <h2>Take the Test</h2>;
  }
}

export default withFirebase(TakeTest);
