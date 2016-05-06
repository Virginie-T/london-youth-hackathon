import React from 'react'

export default class Bubble extends React.Component {
  render () {
    return (
      <svg height="200" width="200" className={this.props.size}>
        <circle cx="100" cy="100" r={this.props.radius} fill={this.props.color} />         
        <text
          x="80"
          y="100"
          fontFamily="sans-serif"
          fontSize="20px"
          fill={this.props.textColor}
        >{this.props.text}</text>
      </svg>
    )
  }
}

