import React, { Component } from 'react';
import './styles//base/App.css';

import AppRouter from './Router/AppRouter';

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
    return  <AppRouter/>
  }
}

export default App;
