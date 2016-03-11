import React, { Component } from 'react';
import { Link } from 'react-router';

class Test extends Component {
  render () {
    return (
      <div>
        <h3> Test </h3>
        <Link to='/'>Back to Home</Link>
      </div>
    );
  }
}

export default Test;