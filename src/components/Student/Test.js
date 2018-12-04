import React from 'react';
// import { Link } from 'react-router-dom';
import firebase from '../../firebase/firebase';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      testId: '',
      questions: [],
      submittedAnswers: [],
    }
  }

  componentDidMount() {
    const testsRef = firebase.database().ref('questions');
    testsRef.on('value', (snapshot) => {
      let tests = snapshot.val();
      let newState = [];
      Object.entries(tests).forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        console.log(key, value);
        newState.push({value});
        console.log(newState);
      })
    })
  }

  render () {
    return (
      <main id="test">
        <h2>Test {this.state.testId}</h2>
      </main>
    )
  }
};

export default Test;