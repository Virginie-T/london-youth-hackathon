import React from 'react'
import {Row, Col} from 'react-materialize'
import Range from './Range.js'

export default class SlidQuestionnaire extends React.Component {
  render () {
    return (
      <div>
      <Range
        min={1}
        max={8}
        step={8}
        orientation={'vertical'}
        value={8}
      />
      </div>
    )
  }
}
