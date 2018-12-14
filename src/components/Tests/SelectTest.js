import React from "react";
import { Link } from "react-router-dom";
import TestList from "./TestList";
import { withFirebase } from "../Firebase";
import "../../styles/components/Student/TakeTest.css";

const TakeTest = () => (
  <main id="taketest">
    <h2>Select A Test</h2>
    <div className="select-test">
      <TestList />
    </div>
  </main>
);

export default withFirebase(TakeTest);
