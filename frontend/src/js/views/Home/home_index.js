import React from 'react'
import { Col, Row, Tabs, Tab, Button } from 'react-materialize'

export default class Home extends React.Component {
  render () {
    return (
      <Row>
        <Col s={10} m={10} l={10} offset='s1 m1 l1'>
          <Tabs className='tab-demo z-depth-1'>
            <Tab title="start LEQ" active>
              <Button  className='start-button' waves='light' large={true}>Start LEQ</Button>
            </Tab>
            <Tab title="my details">my details</Tab>
            <Tab title="my LEQs">my LEQs</Tab>
            <Tab title="about the LEQ">about the LEQ</Tab>
          </Tabs>
        </Col>
    </Row>
    )
  }
}
