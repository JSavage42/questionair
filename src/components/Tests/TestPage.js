import React from "react";

// *** Constants *** //
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";

// *** Styles *** //
import "../../styles/components/Tests/TestPage.css";

// *** Third-Party *** //
import { compose } from "recompose";

// *** HOC and Context *** //
import { withFirebase } from "../Firebase";
import { withAuthentication } from "../Session";

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
      url: "",
      toggle: false,
      answersGiven: []
    };
  }

  componentWillMount = () => {
    this.setState({ loading: false });
    console.log(this.state);
  };

  handleHostTest = e => {
    e.preventDefault();
    const { tid, test, questions, answersGiven } = this.state;
    const { firebase, history } = this.props;
    const numberOfQuestions = questions.length;
    for (let i = 1; i <= numberOfQuestions; i++) {
      this.state.answersGiven.push([i, false]);
    }
    const hostedTest = {
      answersGiven: answersGiven,
      currentQuestion: 0,
      ...test
    };
    // *** Create Hosted Test *** //
    firebase.host(tid).set(hostedTest);

    history.push({
      pathname: `${ROUTES.TESTS}/i/${tid}`,
      state: tid
    });
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
            {(authUser && authUser.roles.includes(ROLES.ADMIN)) ||
            authUser.roles.includes(ROLES.INSTRUCTOR) ? (
              <article id="tests-host">
                <form onSubmit={this.handleHostTest}>
                  <input type="submit" name="submit" value="Host This Test" />
                </form>
              </article>
            ) : (
              ""
            )}
            <ul>
              <li>Possible Points: {test.totalPoints}</li>
              <li>Passing Score: {test.passingScore}</li>
              <li>Number of Questions: {test.questions.length - 1}</li>
              <li>
                Questions:
                <ul id="questions">
                  {/* Iterates through the questions array, checks if there is an image associated with it, downloads the image and sets the url to the url state. */}
                  {questions.map(question => {
                    question.image &&
                      firebase
                        .images(authUser.uid)
                        .child(`${question.image.substring(12)}`)
                        .getDownloadURL()
                        .then(url => {
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
                          {question.options.map(op => (
                            <li
                              key={op}
                              data-key={op}
                              data-question={question.questionNum}
                              className="option btn"
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
  withFirebase
)(TestPage);
