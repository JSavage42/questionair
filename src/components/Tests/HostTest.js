import React, { Component } from 'react';

// *** Constants *** //

// *** Styles *** //

// *** Third-Party *** //
import { compose } from 'recompose';

// *** HOC and Context *** //
import { withFirebase } from '../Firebase';
import { withAuthentication } from '../Session';

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
      currentQuestion: '',
      submittedAnswers: [],
    };
  }

  componentWillMount() {
    const { tid } = this.state;
    const { firebase } = this.props;
    firebase.host(tid).on('value', (snapshot) => {
      this.setState({
        test: snapshot.val(),
        questions: Object.values(snapshot.val().questions),
        currentQuestion: snapshot.val().currentQuestion,
        answersGiven: Object.values(snapshot.val().answersGiven),
        loading: false,
      });
      const submittedAnswersArray = [];
      const currQuest = snapshot.val().currentQuestion + 1;
      Object.entries(this.state.answersGiven[currQuest]).forEach(
        ([key, value]) => {
          submittedAnswersArray.push([key, value]);
        },
        );
        this.setState({ submittedAnswers: submittedAnswersArray });
      });
    }

  handleNextQuestion = () => {
    const { firebase } = this.props;
    const { tid, currentQuestion } = this.state;
    let increment = 1;
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + increment,
    }));

    firebase
      .host(tid)
      .child(`currentQuestion`)
      .set(currentQuestion);
  };

  render() {
    const { tid, loading, test, submittedAnswers } = this.state;
    return (
      <main id="host-test">
        {loading && <div>Loading...</div>}
        {test && (
          <section>
            <h2>Test ID: {tid}</h2>
            <p>Answers Given:</p>
            <ul id="answers-given">
              {submittedAnswers[0] !== false &&
                submittedAnswers.map(([key, value]) => (
                  <li key={key}>{`${key}: ${value}`}</li>
                ))}
            </ul>
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
  withFirebase,
)(HostTest);
