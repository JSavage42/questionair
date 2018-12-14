import React from "react";

import { withFirebase } from "../Firebase";

class TestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: JSON.parse(localStorage.getItem("authUser")),
      test: null,
      tid: "",
      questions: [],
      loading: true
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

  render() {
    const { test, tid, loading } = this.state;

    return (
      <div>
        <h2>Test #{tid}</h2>
        {loading && <div>Loading ...</div>}

        {test && (
          <div>
            <ul>
              <li>Possible Points: {this.state.test.totalPoints}</li>
              <li>Passing Score: {this.state.test.passingScore}</li>
              <li>
                Number of Questions: {this.state.test.questions.length - 1}
              </li>
              <li>
                Questions:
                <ul>
                  {this.state.questions.map(question => {
                    console.log(question);
                    return (
                      <li key={question.questionNum}>
                        #{question.questionNum}&nbsp;
                        <p>
                          {question.reference1}
                          <br />
                          {question.reference2}
                        </p>
                        {question.question}
                        <ol>
                          {question.options.map(op => (
                            <li key={op}>{op}</li>
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
      </div>
    );
  }
}

export default withFirebase(TestPage);
