import React from 'react'
import {Grid, Row, Col, Card, Modal} from 'react-materialize'
import Bubble from '../Bubble/index.js'

const results = [
  {
    name: "Confidence",
    score: 8,
    color: 'leq-blue',
  },
  {
    name: "Social Competence",
    score: 3,
    color: 'leq-red',
  },
  {
    name: "Love of Puzzles",
    score: 8,
    color: 'leq-yellow',
  },
  {
    name: "Confidence",
    score: 8,
    color: 'leq-blue',
  },
  {
    name: "Social Competence",
    score: 3,
    color: 'leq-orange',
  },
  {
    name: "Love of Puzzles",
    score: 8,
    color: 'leq-purple',
  },
  {
    name: "Social Competence",
    score: 3,
    color: 'leq-red',
  },
  {
    name: "Love of Puzzles",
    score: 8,
    color: 'leq-yellow',
  }
]
export default class Results extends React.Component {
  rowMaker (results) {
    return results.map((result, i) => <Col key={i} s={2} m={2} l={2} offset={i === 0 ? "l2" : ""}>
      <Bubble
        size={result.score}
        radius={result.score}
        text={result.name}
        color={result.color}
        textColor="black"
      />
    <p className='bubble-text'>{result.name}</p>
    </Col>)
  }

  render () {
    const row1 = this.rowMaker(results.slice(0, 4))
    const row2 = this.rowMaker(results.slice(4, results.length))
    return (
      <div>
        <Row>{row1}</Row>
        <Row>{row2}</Row>
      </div>
    )
  }
}
