import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render () {
    return this.props.children || (
      <div>
        <h3> Home </h3>
        <a href='/test/'>to Test</a>
      </div>
    );
  }
}

export default Home;