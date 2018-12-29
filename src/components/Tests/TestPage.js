import React from 'react';
import '../../styles/components/Tests/TestPage.css';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import { withAuthentication } from '../Session';

class TestPage extends React.Component {
  constructor(props) {
    super(props);
    const { authUser, test } = this.props.location.state;
    this.state = {
      authUser: authUser,
      test: test,
      tid: test.tid,
      questions: Object.values(test.questions),
      loading: true,
      url: '',
      toggle: false,
    };
  }

  componentWillMount = () => {
    this.setState({ loading: false });
  };

  handleToggle = (e) => {
    const toggle = document.querySelector(`li[data-key=${e.target.id}]`);
    toggle.classList.toggle('toggle');
  };

  handleSubmitAnswer = (e) => {
    const { firebase } = this.props;
    const { tid, authUser } = this.state;
    firebase
      .host(tid)
      .child(`answersGiven/`)
      .child(`${e.target.dataset.question}/`)
      .child(`${authUser.uid}`)
      .set(e.target.dataset.key);

    const toggle = document.querySelector(`li[data-key="${e.target.id}"]`);
    toggle.classList.toggle('toggle');
  };

  render() {
    const { test, tid, loading, questions, authUser, url } = this.state;
    const { firebase } = this.props;

    return (
      <main id="test-page">
        <h2>Test #{tid}</h2>
        {loading && <div>Loading ...</div>}
        {/* Checks if there is a tests object and prints the following JSX */}
        {test && (
          <div>
            <ul>
              <li>Possible Points: {test.totalPoints}</li>
              <li>Passing Score: {test.passingScore}</li>
              <li>Number of Questions: {test.questions.length - 1}</li>
              <li>
                Questions:
                <ul id="questions">
                  {/* Iterates through the questions array, checks if there is an image associated with it, downloads the image and sets the url to the url state. */}
                  {questions.map((question) => {
                    question.image &&
                      firebase
                        .images(authUser.uid)
                        .child(`${question.image.substring(12)}`)
                        .getDownloadURL()
                        .then((url) => {
                          this.setState({ url });
                        });
                    /* Returns the question number, text, image (if there is one) and then iterates through the options which are clickable to submit answers. */
                    return (
                      <li className="question" key={question.questionNum}>
                        <p className="questionTitle">
                          Question #{question.questionNum}: {question.question}
                        </p>
                        <br />
                        {question.image && (
                          <img
                            src={url}
                            alt="question"
                            title="Image Question"
                          />
                        )}
                        <ol>
                          {question.options.map((op) => (
                            <li
                              key={op}
                              data-key={op}
                              data-question={question.questionNum}
                              className="option"
                              id={op}
                              value={op}
                              onClick={this.handleSubmitAnswer}
                              // onMouseDown={this.handleToggle}
                            >
                              {op}
                            </li>
                          ))}
                        </ol>
                        Answer: {question.answer}
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
        )}
      </main>
    );
  }
}

// Wraps the component with the higher order component "withFirebase" to give the component access to the Firebase API.
export default compose(
  withAuthentication,
  withFirebase,
)(TestPage);
