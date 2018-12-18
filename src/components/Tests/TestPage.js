import React from "react";
import "../../styles/components/Tests/TestPage.css";
import { withFirebase } from "../Firebase";

class TestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Gets current authUser from local storage
      authUser: JSON.parse(localStorage.getItem("authUser")),
      test: null,
      tid: "",
      questions: [],
      loading: true,
      url: ""
    };
  }

  componentDidMount() {
    const { authUser } = this.state;
    if (authUser.tests) {
      const tid = this.props.history.location.state.test.tid;
      this.setState({ tid: tid });
      // Gets tests from current signed in user. Sets those to state along with the questions in their respective arrays.
      this.props.firebase
        .test(authUser.uid, this.props.history.location.state.test.tid)
        .on("value", snapshot => {
          this.setState({
            test: snapshot.val(),
            questions: Object.values(snapshot.val().questions),
            loading: false
          });
        });
    }
  }

  componentWillUnmount() {
    const { authUser, tid } = this.state;
    this.props.firebase.test(authUser.uid, tid).off();
  }

  handleSubmitAnswer = e => {
    // TODO Create logic for handling a submitted answer.
    console.log(e.target.id);
  };

  render() {
    const { test, tid, loading } = this.state;

    return (
      <main id="test-page">
        <h2>Test #{tid}</h2>
        {loading && <div>Loading ...</div>}
        {/* Checks if there is a tests object and prints the following JSX */}
        {test && (
          <div>
            <ul>
              <li>Possible Points: {this.state.test.totalPoints}</li>
              <li>Passing Score: {this.state.test.passingScore}</li>
              <li>Number of Questions: {this.state.test.questions.length}</li>
              <li>
                Questions:
                <ul id="questions">
                  {/* Iterates through the questions array, checks if there is an image associated with it, downloads the image and sets the url to the url state. */}
                  {this.state.questions.map(question => {
                    question.image &&
                      this.props.firebase
                        .images(this.state.authUser.uid)
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
                            src={this.state.url}
                            alt="question"
                            title="Image Question"
                          />
                        )}
                        <ol>
                          {question.options.map(op => (
                            <li
                              key={op}
                              className="option"
                              id={op}
                              value={op}
                              onClick={this.handleSubmitAnswer}
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
export default withFirebase(TestPage);
