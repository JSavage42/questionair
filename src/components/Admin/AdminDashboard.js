import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/components/Admin/AdminDashboard.css';

class AdminDashboard extends React.Component {

  render() {
    return (
      <main id="admin-dashboard">
        <h2>Administration</h2>
        <ul>
          <li><Link to="/new_test">New Test</Link></li>
          <li><Link to="/add_questions">Add Questions</Link></li>
          <li><Link to="/take_test">Take Test</Link></li>
        </ul>
      </main>
    );
  };
}

export default AdminDashboard;