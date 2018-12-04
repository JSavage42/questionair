import React from 'react';
import '../../styles/components/Questions/NewQuestion.css';
import firebase from '../../firebase/firebase.js';

class CreateTestBank extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      testBankId: '',
      question: '',
      questionNum: '',
      op1: '',
      op2: '',
      op3: '',
      op4: '',
      op5: '',
      op6: '',
      op7: '',
      op8: '',
      op9: '',
      answer: ''
    };

    this.handleOnSubmit=this.handleOnSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  };
  handleOnSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const questionRef = firebase.database().ref(`tests/${this.state.testBankId}/questions/`);
    const question = {
      question: this.state.question,
      questionNum: this.state.questionNum,
      op1: this.state.op1,
      op2: this.state.op2,
      op3: this.state.op3,
      op4: this.state.op4,
      op5: this.state.op5,
      op6: this.state.op6,
      op7: this.state.op7,
      op8: this.state.op8,
      op9: this.state.op9,
      answer: this.state.answer,
    };
    questionRef.child(`${this.state.questionNum}`).set(question);
    this.setState({
      question: '',
      questionNum: '',
      op1: '',
      op2: '',
      op3: '',
      op4: '',
      op5: '',
      op6: '',
      op7: '',
      op8: '',
      op9: '',
      answer: ''
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
      <h2>Create Questions</h2>
      <form id="newQuestion" onSubmit={this.handleOnSubmit}>
        <label>Test Bank ID Number</label>
        <input type="number" value={this.state.testBankId} name="testBankId" onChange={this.handleChange} />
        <fieldset form="newQuestion">
          <legend>Question</legend>
          <label>Question Number and Content</label>
          <input type="number" value={this.state.questionNum} name="questionNum" onChange={this.handleChange}/>
          <input type="text" value={this.state.question} name="question" onChange={this.handleChange} />
          <fieldset form="newQuestion">
            <legend>Options</legend>
            <label>Option 1</label>
            <input type="text" value={this.state.op1} name="op1" onChange={this.handleChange} />
            <label>Option 2</label>
            <input type="text" value={this.state.op2} name="op2" onChange={this.handleChange} />
            <label>Option 3</label>
            <input type="text" value={this.state.op3} name="op3" onChange={this.handleChange} />
            <label>Option 4</label>
            <input type="text" value={this.state.op4} name="op4" onChange={this.handleChange} />
            <label>Option 5</label>
            <input type="text" value={this.state.op5} name="op5" onChange={this.handleChange} />
            <label>Option 6</label>
            <input type="text" value={this.state.op6} name="op6" onChange={this.handleChange} />
            <label>Option 7</label>
            <input type="text" value={this.state.op7} name="op7" onChange={this.handleChange} />
            <label>Option 8</label>
            <input type="text" value={this.state.op8} name="op8" onChange={this.handleChange} />
            <label>Option 9</label>
            <input type="text" value={this.state.op9} name="op9" onChange={this.handleChange} />
          </fieldset>
          <label>Correct Answer</label>
          <input type="number" value={this.state.answer} name="answer" onChange={this.handleChange} min="1" max="9" />
        </fieldset>
        <input type="submit"  name="submit" value="Submit" />
      </form>
    </main>
    );
  }
}

export default CreateTestBank;
