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
      data: []
    };
  }
  componentWillMount() {
    const { tid } = this.state;
    const { firebase } = this.props;
    firebase.host(tid).on("value", snapshot => {
      this.setState({
        test: snapshot.val(),
        questions: Object.values(snapshot.val().questions),
        currentQuestion: snapshot.val().currentQuestion,
        answersGiven: Object.values(snapshot.val().answersGiven),
        loading: false
      });

      // *** Initializing Arrays *** //
      const submittedAnswersArray = [];
      const justAnswers = [];
      const labels = [];
      const dataArry = [];
      const currQuest = snapshot.val().currentQuestion;

      // *** if that looks at the answers given to the current question, pulls out the answers from the student IDs *** //
      if (this.state.answersGiven[currQuest]) {
        Object.entries(this.state.answersGiven[currQuest]).forEach(
          ([key, value]) => {
            submittedAnswersArray.push([key, value]);
            justAnswers.push(value);
          }
        );
        this.setState({
          submittedAnswers: submittedAnswersArray
        });
      } else {
        return;
      }

      // *** Sort justAnswers and counts the duplicates. Also stores the unique entires into the labels array. *** //
      justAnswers.sort();
      let current = null;
      let cnt = 1;
      for (let i = 0; i < justAnswers.length; i++) {
        current = justAnswers[i];
        if (justAnswers[i + 1] == current) {
          cnt++;
        } else {
          labels.push(current);
          // *** Takes the number of answers that are the same, divides them by the length of the answers and multiples by 100 to get the percentage *** //
          dataArry.push((cnt / justAnswers.length) * 100);
          cnt = 1;
        }
      }

      this.setState({ labels, data: dataArry });
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
    const { tid, loading, test, labels, data } = this.state;
    return (
      <main id="host-test">
        {loading && <div>Loading...</div>}
        {test && (
          <section>
            <h2>Quiz ID: {tid}</h2>
            <p>Answers</p>
            <BarChart labels={labels} data={data} />
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
