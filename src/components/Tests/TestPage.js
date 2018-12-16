import React from "react";
import "../../styles/components/Tests/TestPage.css";
import { withFirebase } from "../Firebase";

class TestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    console.log(e.target.id);
  };

  render() {
    const { test, tid, loading } = this.state;

    return (
      <main id="test-page">
        <h2>Test #{tid}</h2>
        {loading && <div>Loading ...</div>}

        {test && (
          <div>
            <ul>
              <li>Possible Points: {this.state.test.totalPoints}</li>
              <li>Passing Score: {this.state.test.passingScore}</li>
              <li>Number of Questions: {this.state.test.questions.length}</li>
              <li>
                Questions:
                <ul id="questions">
                  {this.state.questions.map(question => {
                    question.image &&
                      this.props.firebase
                        .images(this.state.authUser.uid)
                        .child(`${question.image.substring(12)}`)
                        .getDownloadURL()
                        .then(url => {
                          this.setState({ url });
                        });
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

export default withFirebase(TestPage);
