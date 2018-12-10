import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class TestItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      test: null,
      ...props.location.state,
    };
  }

  componentDidMount() {
    if (this.state.test) {
      return;
    }

    this.setState({ loading: true });

    this.props.firebase.test(this.props.match.params.id).on('value', snapshot => {
      this.setState({
        test: snapshot.val(),
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.test(this.props.match.params.id).off();
  }

  render() {
    const { test, loading } = this.state;

    return (
      <div>
        <h2>Test ({this.props.match.params.id})</h2>
        {loading && <div>Loading ...</div>}

        {test && (
          <div>
            <span>
              <strong>TID:</strong> {test.tid}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default withFirebase(TestItem);
