import React from 'react'
import {Grid, Row, Col, Card, Modal} from 'react-materialize'
import Bubble from '../Bubble/index.js'

const results = [
  {
    name: "confidence",
    score: 8,
    color: "#0083C3",
  },
  {
    name: "social competence",
    score: 3,
    color: "#DB487E",
  },
  {
    name: "Love of Puzzles",
    score: 9,
    color: "#D5E739",
  },
  {
    name: "confidence",
    score: 8,
    color: "#0083C3",
  },
  {
    name: "social competence",
    score: 3,
    color: "#DB487E",
  },
  {
    name: "Love of Puzzles",
    score: 9,
    color: "#D5E739",
  },
  {
    name: "social competence",
    score: 3,
    color: "#DB487E",
  },
  {
    name: "Love of Puzzles",
    score: 9,
    color: "#D5E739",
  }
]
export default class Results extends React.Component {
  render () {
    const circles = results.map((result, i) => {
      return <Col key={i} s={1} m={1} l={1} offset={i === 0 ? "l1" : ""}>
        <Bubble
          size={result.score}
          radius={result.score * 5}
          text={result.name}
          color={result.color}
          textColor="black"
        />
      </Col>
    })
    return (
      <Row>
        {circles}
      </Row>
    )
  }
}
