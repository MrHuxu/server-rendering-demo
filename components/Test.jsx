import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Test extends Component {
  static initState () {
    return Promise.resolve({});
  }

  render () {
    return (
      <div>
        <h3> Test </h3>
        <a href='/'>Back to Home</a>
      </div>
    );
  }
}

export default connect()(Test);