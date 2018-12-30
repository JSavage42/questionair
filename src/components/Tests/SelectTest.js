import React from 'react';

// *** Styles *** //
import '../../styles/components/Student/TakeTest.css';

// *** HOC and Context *** //
import { withFirebase } from '../Firebase';

// *** Components *** //
import TestList from './TestList';

const TakeTest = () => (
  <main id="taketest">
    <h2>Select A Test</h2>
    <div className="select-test">
      <TestList />
    </div>
  </main>
);

export default withFirebase(TakeTest);
