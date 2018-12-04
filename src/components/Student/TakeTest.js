import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase/firebase';
import '../../styles/components/Student/TakeTest.css';

class TakeTest extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      availableTests: []
    }
  }

  componentDidMount() {
    const testsRef = firebase.database().ref('tests');
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
        this.setState({
          availableTests: newState
        })
    }
    )
  }
  
  render() {
    console.log(this.state.availableTests)
    return (
      <main id="taketest">
        <h2>Take A Test</h2>
        <div className="select-test">
          <ul>
            {
              this.state.availableTests.map(test => (
                <li key={test.value.testBankId}><Link to={`/test/${test.value.testBankId}`}>{test.value.testBankId}</Link></li>
              ))
            }
          </ul>
        </div>
      </main>
    )
  }
};

export default TakeTest;