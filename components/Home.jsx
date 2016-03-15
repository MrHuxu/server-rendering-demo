import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { countUp, countDown } from '../actions/CountActions';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      color: '#e57373'
    }

    this.setBlue = this.setBlue.bind(this);
    this.setOrange = this.setOrange.bind(this);
    this.handleCountUp = this.handleCountUp.bind(this);
    this.handleCountDown = this.handleCountDown.bind(this);
  }

  handleCountUp () {
    this.props.dispatch(countUp());
  }

  handleCountDown () {
    this.props.dispatch(countDown());
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
        <br />
        <h4>{this.props.count}</h4>
        <button onClick={this.handleCountUp}> count + 1 </button>
        <button onClick={this.handleCountDown}> count - 1 </button>
        <br />
        <a href='/test'> to test </a>
      </div>
    );
  }
}

var mapStateToProps = function (state) {
  return {
    count: state.count.count
  };
};

export default connect(mapStateToProps)(Home);