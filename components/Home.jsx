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
    alert('hehe');
    this.setState({ color: '#02bad2' })
  }

  setOrange () {
    this.setState({ color: '#e57373' })
  }

  componentDidMount () {
    alert('hehe')
  }

  render () {
    return this.props.children || (
      <div>
        <h3> Home </h3>
        <button onClick={this.setBlue}> set blue </button>
        <button onClick={this.setOrange}> set orange </button>
        <div style={{ width: 100, height: 50, backgroundColor: this.state.color }} />
        <a href='/test/'>to Test</a>
      </div>
    );
  }
}

export default Home;