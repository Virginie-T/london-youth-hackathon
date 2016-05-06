import React, { Component } from 'react';
import Slider from 'react-rangeslider';

export default class Range extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 8
    };
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <Slider
        value={8}
        orientation="vertical"
        onChange={this.handleChange} />
    );
  }
}
