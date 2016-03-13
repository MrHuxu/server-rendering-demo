import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      color: '#e57373'
    }

    this.setBlue = this.setBlue.bind(this);
    this.setOrange = this.setOrange.bind(this);
  }

  setBlue () {
    this.setState({ color: '#02bad2' })
  }

  setOrange () {
    this.setState({ color: '#e57373' })
  }

  render () {
    return this.props.children || (
      <div>
        <h3> Home </h3>
        <button onClick={this.setBlue}> set blue </button>
        <button onClick={this.setOrange}> set orange </button>
        <div style={{ width: 100, height: 50, backgroundColor: this.state.color }} />
        <Link to='/test/'> to test </Link>
      </div>
    );
  }
}

export default Home;