import React from "react";
import "../../styles/components/Questions/NewQuestion.css";
import { withFirebase } from "../Firebase";
import { isNullOrUndefined } from "util";

class NewQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tid: "",
      reference1: "",
      reference2: "",
      question: "",
      questionNum: "",
      op1: "",
      op2: "",
      op3: "",
      op4: "",
      op5: "",
      op6: "",
      op7: "",
      op8: "",
      op9: "",
      op10: "",
      options: [],
      answer: "",
      user: "",
      image: ""
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    this.props.firebase.auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user, error: null });
      }
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    if (this.state.op1) {
      this.state.options.push(this.state.op1);
    }
    if (this.state.op2) {
      this.state.options.push(this.state.op2);
    }
    if (this.state.op3) {
      this.state.options.push(this.state.op3);
    }
    if (this.state.op4) {
      this.state.options.push(this.state.op4);
    }
    if (this.state.op5) {
      this.state.options.push(this.state.op5);
    }
    if (this.state.op6) {
      this.state.options.push(this.state.op6);
    }
    if (this.state.op7) {
      this.state.options.push(this.state.op7);
    }
    if (this.state.op8) {
      this.state.options.push(this.state.op8);
    }
    if (this.state.op9) {
      this.state.options.push(this.state.op9);
    }
    if (this.state.op10) {
      this.state.options.push(this.state.op10);
    }
    if (e.target.upLoadImage === isNullOrUndefined) {
      const file = e.target.uploadImage.files[0];
      const fileName = file.name;
      this.props.firebase
        .image(this.state.user.uid, fileName)
        .put(file)
        .then(snapshot => {
          console.log(snapshot);
        });
    }

    const question = {
      reference1: this.state.reference1,
      reference2: this.state.reference2,
      question: this.state.question,
      questionNum: this.state.questionNum,
      options: this.state.options,
      answer: this.state.answer,
      image: this.state.image
    };

    this.props.firebase
      .user(this.state.user.uid)
      .child("tests")
      .child(this.state.tid)
      .child("questions/")
      .child(this.state.questionNum)
      .set(question);

    this.setState({
      reference1: "",
      reference2: "",
      question: "",
      questionNum: "",
      op1: "",
      op2: "",
      op3: "",
      op4: "",
      op5: "",
      op6: "",
      op7: "",
      op8: "",
      op9: "",
      op10: "",
      answer: "",
      options: [],
      image: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <main id='new-question'>
        <h2>Create Questions</h2>
        <form id='newQuestion' onSubmit={this.handleOnSubmit}>
          <label>Test Bank ID Number</label>
          <input
            type='number'
            value={this.state.testBankId}
            name='tid'
            onChange={this.handleChange}
            placeholder='Test Bank ID'
          />
          <label>Reference 1</label>
          <input
            type='text'
            value={this.state.reference1}
            name='reference1'
            onChange={this.handleChange}
            placeholder='Reference 1'
          />
          <label>Reference 2</label>
          <input
            type='text'
            value={this.state.reference2}
            name='reference2'
            onChange={this.handleChange}
            placeholder='Reference 2'
          />
          <label>Question Number and Content</label>
          <input
            type='number'
            value={this.state.questionNum}
            name='questionNum'
            onChange={this.handleChange}
            placeholder='Question Number'
          />
          <input
            type='text'
            value={this.state.question}
            name='question'
            onChange={this.handleChange}
            placeholder='Question Text'
          />
          <input
            accept='.jpg,.png'
            type='file'
            id='uploadImage'
            name='image'
            onChange={this.handleChange}
          />
          <label>Option A</label>
          <input
            type='text'
            value={this.state.op1}
            name='op1'
            onChange={this.handleChange}
            placeholder='Option A'
          />
          <label>Option B</label>
          <input
            type='text'
            value={this.state.op2}
            name='op2'
            onChange={this.handleChange}
            placeholder='Option B'
          />
          <label>Option C</label>
          <input
            type='text'
            value={this.state.op3}
            name='op3'
            onChange={this.handleChange}
            placeholder='Option C'
          />
          <label>Option D</label>
          <input
            type='text'
            value={this.state.op4}
            name='op4'
            onChange={this.handleChange}
            placeholder='Option D'
          />
          <label>Option E</label>
          <input
            type='text'
            value={this.state.op5}
            name='op5'
            onChange={this.handleChange}
            placeholder='Option E'
          />
          <label>Option F</label>
          <input
            type='text'
            value={this.state.op6}
            name='op6'
            onChange={this.handleChange}
            placeholder='Option F'
          />
          <label>Option G</label>
          <input
            type='text'
            value={this.state.op7}
            name='op7'
            onChange={this.handleChange}
            placeholder='Option G'
          />
          <label>Option H</label>
          <input
            type='text'
            value={this.state.op8}
            name='op8'
            onChange={this.handleChange}
            placeholder='Option H'
          />
          <label>Option I</label>
          <input
            type='text'
            value={this.state.op9}
            name='op9'
            onChange={this.handleChange}
            placeholder='Option I'
          />
          <label>Option J</label>
          <input
            type='text'
            value={this.state.op10}
            name='op10'
            onChange={this.handleChange}
            placeholder='Option J'
          />

          <label>Correct Answer</label>
          <input
            type='text'
            value={this.state.answer}
            name='answer'
            onChange={this.handleChange}
            placeholder='Correct Answer'
          />

          <input type='submit' name='submit' value='Submit' />
          <input type='reset' name='reset' value='Reset' />
        </form>
      </main>
    );
  }
}

export default withFirebase(NewQuestion);
