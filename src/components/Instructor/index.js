import React from "react";

// *** Constants *** //
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";

// *** Styles *** //
import "../../styles/components/Instructor/InstructorPage.css";

// *** Third-Party *** //
import { compose } from "recompose";

// *** HOC and Context *** //
import { withAuthorization } from "../Session";
import { withRouter } from "react-router-dom";

// *** Components *** //
import { TestList } from "../Tests";
import { HostedTestList } from "../Tests";

class InstructorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: JSON.parse(localStorage.getItem("authUser")).uid
    };
  }

  handleEndHostedQuizzes = () => {
    const { authUser } = this.state;
    const { firebase } = this.props;
    firebase.hosts(authUser).remove();
  };

  handleLinkClick = e => {
    const { history } = this.props;
    let route;
    if (e.target.name === "CREATE_TEST") {
      route = ROUTES.CREATE_TEST;
    } else {
      route = ROUTES.NEW_QUESTION;
    }
    history.push(route);
  };

  render() {
    return (
      <main id="instructor-page">
        <h2>Instructor</h2>
        <h3>Create Quizzes</h3>
        <input
          type="button"
          value="Create Quiz Bank"
          name="CREATE_TEST"
          onClick={this.handleLinkClick}
        />
        <input
          type="button"
          value="New Question"
          name="NEW_QUESTION"
          onClick={this.handleLinkClick}
        />
        <section id="instructor-test-list">
          <article id="test-list">
            <h3>Available Quizzes</h3>
            <TestList />
          </article>
        </section>
        <section id="instructor-hosted-tests">
          <article id="hosted-list">
            <h3>Hosted Quizzes</h3>
            <HostedTestList />
            <input
              type="button"
              value="End Hosted Quizzes"
              className="endHostedTests"
              onClick={this.handleEndHostedQuizzes}
            />
          </article>
        </section>
      </main>
    );
  }
}

const condition = authUser =>
  (authUser && authUser.roles.includes(ROLES.ADMIN)) ||
  authUser.roles.includes(ROLES.INSTRUCTOR);

export default compose(
  withAuthorization(condition),
  withRouter
)(InstructorPage);
