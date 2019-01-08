import React, { Component } from "react";
import BarChart from "./BarChart";

// *** Constants *** //

// *** Styles *** //

// *** Third-Party *** //
import { compose } from "recompose";

// *** HOC and Context *** //
import { withFirebase } from "../Firebase";
import { withAuthentication } from "../Session";

// *** Components *** //

class HostTest extends Component {
  constructor(props) {
    super(props);
    const { state } = this.props.location;
    this.state = {
      tid: state,
      questions: [],
      test: null,
      loading: true,
      answersGiven: [],
      currentQuestion: "",
      submittedAnswers: [],
      labels: [],
      data: [],
      justAnswers: []
    };
  }
  componentWillMount() {
    const { tid } = this.state;
    const { firebase } = this.props;
    console.log(this.state);
    firebase.host(tid).on("value", snapshot => {
      this.setState({
        test: snapshot.val(),
        questions: Object.values(snapshot.val().questions),
        currentQuestion: snapshot.val().currentQuestion,
        answersGiven: Object.values(snapshot.val().answersGiven),
        loading: false
      });
      const submittedAnswersArray = [];
      const justAnswers = [];
      const currQuest = snapshot.val().currentQuestion;
      if (this.state.answersGiven[currQuest]) {
        Object.entries(this.state.answersGiven[currQuest]).forEach(
          ([key, value]) => {
            submittedAnswersArray.push([key, value]);
            justAnswers.push(value);
          }
        );
        this.setState({ submittedAnswers: submittedAnswersArray, justAnswers });
      } else {
        return;
      }
    });
  }

  handleNextQuestion = () => {
    const { firebase } = this.props;
    const { tid, currentQuestion } = this.state;
    let increment = 1;
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion + increment
    }));

    firebase
      .host(tid)
      .child(`currentQuestion`)
      .set(currentQuestion);
  };

  render() {
    const { tid, loading, test, justAnswers } = this.state;
    return (
      <main id="host-test">
        {loading && <div>Loading...</div>}
        {test && (
          <section>
            <h2>Test ID: {tid}</h2>
            <p>Answers</p>
            <BarChart labels={justAnswers} data={[100]} />
          </section>
        )}
        <input
          type="button"
          value="Next Question"
          name="next-question"
          onClick={this.handleNextQuestion}
        />
      </main>
    );
  }
}

export default compose(
  withAuthentication,
  withFirebase
)(HostTest);
