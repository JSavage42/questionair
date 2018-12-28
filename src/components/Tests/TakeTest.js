import React from 'react';
import '../../styles/components/Tests/TakeTest.css';
import { withFirebase } from '../Firebase';
import { withAuthentication } from '../Session';
import { compose } from 'recompose';

class TakeTest extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    this.state = {
      authUser: '',
      tid: location.state.tid,
      questions: [],
      test: null,
      loading: true,
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
        loading: false,
      });
    });
  }

  handleSubmitAnswer = (e) => {
    e.preventDefault();
  };

  render() {
    const { loading, test, questions, tid, instructorID, url } = this.state;
    const { firebase } = this.props;
    return (
      <main id="take-test">
        {loading && <div>Loading ...</div>}
        {test && (
          <section id="test">
            <h2>Test ID: {tid}</h2>
            <article className="test-question">
              <ul id="questions">
                {/* Iterates through the questions array, checks if there is an image associated with it, downloads the image and sets the url to the url state. */}
                {questions.map((question) => {
                  question.image &&
                    firebase
                      .images(instructorID)
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
                        <img src={url} alt="question" title="Image Question" />
                      )}
                      <ol>
                        {question.options.map((op) => (
                          <li
                            key={op}
                            className="option"
                            id={op}
                            value={question.questionNum}
                            onClick={this.handleSubmitAnswer}
                          >
                            {op}
                          </li>
                        ))}
                      </ol>
                    </li>
                  );
                })}
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
