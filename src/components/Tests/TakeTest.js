import React from "react";

import { withFirebase } from "../Firebase";

const TakeTest = () => (
  <div>
    <h2>Test ID NUMBER HERE</h2>
  </div>
);

export default withFirebase(TakeTest);
