import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => (
  <header>
    <h1>Question Air</h1>
    <nav>
      <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/new_test">New Test</Link></li>
          <li><Link to="/add_questions">Add Questions</Link></li>
        </ul>
    </nav>
  </header>
);

export default Header;