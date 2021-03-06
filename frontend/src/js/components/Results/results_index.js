import React from 'react'
import {Grid, Row, Col, Card, Modal, Button} from 'react-materialize'
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
    return results.map((result, i) => <Col key={i} s={3} m={3} l={3}>
      <Bubble
        size={result.score}
        radius={result.score}
        text={result.name}
        color={result.color}
        textColor="black"
      />
      <Modal
        header={result.name}
        fixedFooter
        trigger={
          <Button waves='light'>{result.name}</Button>
        }>
        {result.name + ' ' + result.score}
      </Modal>

    </Col>)
  }

  render () {
    const processedResults = Object.keys(this.props.results).map((result, i) => {
      return {
        name: result,
        score: Math.floor(this.props.results[result]/3),
        color: results[i].color
      }
    })

    const row1 = this.rowMaker(processedResults.slice(0, 4))
    const row3 = this.rowMaker(processedResults.slice(4, results.length))
    return (
      <div className="results-container">
        <Row>{row1}</Row>
        <Row>{row3}</Row>
      </div>
    )
  }
}
