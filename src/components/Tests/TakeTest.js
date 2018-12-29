import React from 'react';
import '../../styles/components/Tests/TakeTest.css';
import { withFirebase } from '../Firebase';
import { withAuthentication } from '../Session';
import { compose } from 'recompose';

class TakeTest extends React.Component {
  constructor(props) {
    super(props);
    const { state } = this.props.location;
    this.state = {
      uid: state.uid,
      tid: state.tid,
      questions: [],
      test: null,
      loading: true,
      submittedAnswers: [],
      currentQuestion: '',
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
        loading: false,
      });
    });
  }

  handleSubmitAnswer = (e) => {
    e.preventDefault();
    const { firebase } = this.props;
    const { tid, uid } = this.state;
    firebase
      .host(tid)
      .child(`answersGiven/`)
      .child(`${e.target.dataset.question}/`)
      .child(`${uid}`)
      .set(e.target.dataset.key);

    const toggle = document.querySelector(`li[data-key="${e.target.id}"]`);
    toggle.classList.toggle('toggle');
  };

  render() {
    const {
      loading,
      test,
      questions,
      tid,
      instructorID,
      url,
      currentQuestion,
    } = this.state;
    const { firebase } = this.props;
    return (
      <main id="take-test">
        {loading && <div>Loading ...</div>}
        {test && (
          <section id="test">
            <h2>Test ID: {tid}</h2>
            <article className="test-question">
              <ul id="questions">
                <li className="question">
                  {
                    <p className="questionTitle">
                      Question #{questions[currentQuestion].questionNum}:{' '}
                      {questions[currentQuestion].question}
                    </p>
                  }
                </li>
                {questions[currentQuestion].image &&
                  firebase
                    .images(instructorID)
                    .child(`${questions[currentQuestion].image.substring(12)}`)
                    .getDownloadURL()
                    .then((url) => {
                      this.setState({ url });
                    })}
                <br />
                {questions[currentQuestion].image && (
                  <img src={url} alt="question" title="Image Question" />
                )}
                <ol>
                  {questions[currentQuestion].options.map((op) => (
                    <li
                      key={op}
                      data-key={op}
                      data-question={questions[currentQuestion].questionNum}
                      className="option"
                      id={op}
                      value={op}
                      onClick={this.handleSubmitAnswer}
                    >
                      {op}
                    </li>
                  ))}
                </ol>
              </ul>
            </article>
          </section>
        )}
      </main>
    );
  }
}

export default compose(
  withAuthentication,
  withFirebase,
)(TakeTest);
