import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default class Home extends React.Component {
  render () {
    return (
      <Grid className='home'>
        <Row>
          <Col xs={12}>
            <div className='image-container'>
              <img src='img/rhino.png' />
            </div>
            <p>Your app goes here...</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
