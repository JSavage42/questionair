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

  componentDidMount() {
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
    });
  }

  render() {
    const { tid, loading, test, answersGiven } = this.state;
    console.log(answersGiven);
    return (
      <main id="host-test">
        {loading && <div>Loading...</div>}
        {test && (
          <section>
            <h2>Test ID: {tid}</h2>
            <p>Answers Given:</p>
            {this.state.submittedAnswers}
          </section>
        )}
      </main>
    );
  }
}

export default compose(
  withAuthentication,
  withFirebase,
)(HostTest);
