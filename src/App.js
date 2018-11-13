import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      questionNumber: 1,
      answerArr: ['121 m/s', '122 m/s', '123 m/s', '120 m/s'],
      answerLetter: ''
    }

    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
  }

  handleAnswerSubmit(e) {
    e.preventDefault();
    console.log(`Clicked`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Question Air</h1>
        </header>
        <main>
          <section>
            <article>
              <header>
                <h2>Test #id</h2>
              </header>
              <article className="testQuestion">
                <h3>1) What is the average airspeed velocity of an unladen African Swallow?</h3>
                <article className="testAnswers">
                  <form onSubmit={this.handleAnswerSubmit}>
                    <ol>
                      {
                        this.state.answerArr.map((answer) => {
                          return (
                            <React.Fragment>
                          <input type="radio" name={this.state.questionNumber} value={answer}/><li key={answer}>{answer}</li>
                          </React.Fragment>
                          )
                        })
                      }
                    </ol>
                    <label htmlFor="save" id="is-hidden">Save Button</label>
                    <input type="submit" value="Save" name="save" id="save" className="btn" />
                  </form>
                </article>
              </article>
            </article>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
