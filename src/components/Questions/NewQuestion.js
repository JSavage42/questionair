import React from 'react';

// *** Libraries *** //
import { isNullOrUndefined } from 'util';

// *** Styles *** //
import '../../styles/components/Questions/NewQuestion.css';

// *** HOC and Context *** //
import { withFirebase } from '../Firebase';

class NewQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tid: '',
      reference1: '',
      reference2: '',
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
      op10: '',
      options: [],
      answer: '',
      user: '',
      image: '',
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    const { firebase } = this.props;
    firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user, error: null });
      }
    });
  };

  handleOnSubmit = (e) => {
    const { firebase } = this.props;
    const {
      op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      options,
      tid,
      reference1,
      reference2,
      question,
      questionNum,
      answer,
      user,
      image,
    } = this.state;
    e.preventDefault();

    if (op1) {
      options.push(op1);
    }
    if (op2) {
      options.push(op2);
    }
    if (op3) {
      options.push(op3);
    }
    if (op4) {
      options.push(op4);
    }
    if (op5) {
      options.push(op5);
    }
    if (op6) {
      options.push(op6);
    }
    if (op7) {
      options.push(op7);
    }
    if (op8) {
      options.push(op8);
    }
    if (op9) {
      options.push(op9);
    }
    if (op10) {
      options.push(op10);
    }
    if (e.target.upLoadImage === isNullOrUndefined) {
      const file = e.target.uploadImage.files[0];
      const fileName = file.name;
      firebase
        .image(user.uid, fileName)
        .put(file)
        .then((snapshot) => {
          console.log(snapshot);
        });
    }

    const addQuestion = {
      reference1: reference1,
      reference2: reference2,
      question: question,
      questionNum: questionNum,
      options: options,
      answer: answer,
      image: image,
    };

    firebase
      .test(tid)
      .child('questions/')
      .child(questionNum)
      .set(addQuestion);

    this.setState({
      reference1: '',
      reference2: '',
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
      op10: '',
      answer: '',
      options: [],
      image: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      testBankId,
      reference1,
      reference2,
      questionNum,
      question,
      op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      answer,
    } = this.state;
    return (
      <main id="new-question">
        <h2>Create Questions</h2>
        <form id="newQuestion" onSubmit={this.handleOnSubmit}>
          <label>Test Bank ID Number</label>
          <input
            type="text"
            value={testBankId}
            name="tid"
            onChange={this.handleChange}
            placeholder="Test Bank ID"
          />
          <label>Reference 1</label>
          <input
            type="text"
            value={reference1}
            name="reference1"
            onChange={this.handleChange}
            placeholder="Reference 1"
          />
          <label>Reference 2</label>
          <input
            type="text"
            value={reference2}
            name="reference2"
            onChange={this.handleChange}
            placeholder="Reference 2"
          />
          <label>Question Number and Content</label>
          <input
            type="number"
            value={questionNum}
            name="questionNum"
            onChange={this.handleChange}
            placeholder="Question Number"
          />
          <input
            type="text"
            value={question}
            name="question"
            onChange={this.handleChange}
            placeholder="Question Text"
          />
          <input
            accept=".jpg,.png"
            type="file"
            id="uploadImage"
            name="image"
            onChange={this.handleChange}
          />
          <label>Option A</label>
          <input
            type="text"
            value={op1}
            name="op1"
            onChange={this.handleChange}
            placeholder="Option A"
          />
          <label>Option B</label>
          <input
            type="text"
            value={op2}
            name="op2"
            onChange={this.handleChange}
            placeholder="Option B"
          />
          <label>Option C</label>
          <input
            type="text"
            value={op3}
            name="op3"
            onChange={this.handleChange}
            placeholder="Option C"
          />
          <label>Option D</label>
          <input
            type="text"
            value={op4}
            name="op4"
            onChange={this.handleChange}
            placeholder="Option D"
          />
          <label>Option E</label>
          <input
            type="text"
            value={op5}
            name="op5"
            onChange={this.handleChange}
            placeholder="Option E"
          />
          <label>Option F</label>
          <input
            type="text"
            value={op6}
            name="op6"
            onChange={this.handleChange}
            placeholder="Option F"
          />
          <label>Option G</label>
          <input
            type="text"
            value={op7}
            name="op7"
            onChange={this.handleChange}
            placeholder="Option G"
          />
          <label>Option H</label>
          <input
            type="text"
            value={op8}
            name="op8"
            onChange={this.handleChange}
            placeholder="Option H"
          />
          <label>Option I</label>
          <input
            type="text"
            value={op9}
            name="op9"
            onChange={this.handleChange}
            placeholder="Option I"
          />
          <label>Option J</label>
          <input
            type="text"
            value={op10}
            name="op10"
            onChange={this.handleChange}
            placeholder="Option J"
          />

          <label>Correct Answer</label>
          <input
            type="text"
            value={answer}
            name="answer"
            onChange={this.handleChange}
            placeholder="Correct Answer"
          />

          <input type="submit" name="submit" value="Submit" />
          <input type="reset" name="reset" value="Reset" />
        </form>
      </main>
    );
  }
}

export default withFirebase(NewQuestion);
