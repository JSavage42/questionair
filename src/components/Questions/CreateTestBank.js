import React from 'react';
import '../../styles/components/Questions/CreateTestBank.css';
import firebase from '../../firebase/firebase.js';

class CreateTestBank extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      testBankId: '',
      totalPoints: '',
      passingScore: ';'
    };

    this.handleOnSubmit=this.handleOnSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  };
  handleOnSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const questionRef = firebase.database().ref(`tests/${this.state.testBankId}`);
    const testBankMeta = {
      testBankId: this.state.testBankId,
      totalPoints: this.state.totalPoints,
      passingScore: this.state.passingScore
    };
    questionRef.child(`meta`).set(testBankMeta);
    this.setState({
      testBankId: '',
      totalPoints: '',
      passingScore: ';'
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(){
    return (
    <main>
      <h2>Create Test Bank</h2>
      <form id="newTestBank" onSubmit={this.handleOnSubmit}>
        <label>Test Bank ID Number</label>
        <input type="number" value={this.state.testBankId} name="testBankId" onChange={this.handleChange} />
        <label>Total Points</label>
        <input type="number" value={this.state.totalPoints} name="totalPoints" onChange={this.handleChange} />
        <label>Passing Score</label>
        <input type="number" value={this.state.passingScore} name="passingScore" onChange={this.handleChange} />
        <input type="submit"  name="submit" value="Submit" />
      </form>
    </main>
    );
  }
}

export default CreateTestBank;
