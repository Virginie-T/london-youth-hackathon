import React, { Component } from 'react'
import Slider from 'material-ui/lib/slider'

export default class SliderExampleSimple extends React.Component {
  constructor () {
    super()
    this.state = { value: 5 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e, value) {
    this.setState({ value: value })
    const newResults = {}
    newResults[this.props.leqFactor] = value
    this.props.changeState({
      results: {
        ...newResults
      }
    })
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <Slider
          min={1}
          max={8}
          step={1}
          value={this.state.value}
          onChange={this.handleChange}
          required
          defaultValue={5} />
      </div>
    )
  }
}
