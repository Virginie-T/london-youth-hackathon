import React from 'react'
import { Col, Row, Tabs, Tab, Button, Input } from 'react-materialize'
import Results from '../../components/Results/results_index.js'
import Questionnaire from '../../components/Questionnaire/Questionnaire.js'
import AboutSlider from '../../components/AboutSlider'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      buttonStatus: 'live',
      questionStatus: 'hidden',
      results: {
        "Time Management": 16,
        "Social Competence": 16,
        "Achievement Motivation": 16,
        "Intellectual Flexibility": 16,
        "Task Leadership": 16,
        "Emotional Control": 16,
        "Active Initiative": 16,
        "Self-Confidence": 16,
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  changeTabs() {
    console.log('function run')
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    })
    console.log(this.state)
  }
  handleClick() {
    this.setState({
      buttonStatus: 'hidden',
      questionStatus: 'live'
    })
  }
  handleChange (leqFactor, score) {
    const newResults = {}
    newResults[leqFactor] = score += this.state.results[leqFactor]
    this.setState({
      results: {
        ...this.state.results,
        ...newResults
      }
    })
  }

  render () {
    console.log(this.state);
    return (
      <Row>
        <Col s={8} m={8} l={8} offset='s2 m2 l2'>
          <Tabs className='tab-demo z-depth-1'>
            <Tab title='start LEQ' active={this.state.tab1}>
              <Row className={this.state.buttonStatus}>
                <Col s={4} m={4} l={4} offset='s4 m4 l4'>
                  <Button  onClick={this.handleClick.bind(this)} className='start-button' waves='light' large={true}>Start LEQ</Button>
                </Col>
              </Row>
              <div className={this.state.questionStatus}>
                <Questionnaire changeState={this.handleChange} changeTabs={this.changeTabs.bind(this)}/>
              </div>
            </Tab>
            <Tab title='my details' active={this.state.tab2}>
            <Row className='formContainer'>
              <Col s={10} m={8} l={6} offset='s1 m2 l3'>
                <Row>
                  <Input label='First Name' defaultValue='Jackerius' s={6}  />
                  <Input label='Last Name' defaultValue='Morphius' s={6} />
                </Row>
                <Row>
                  <Input label='Youth Club/School Name' s={12} />
                </Row>
                <Row>
                  <Input label='Date of Birth' defaultValue='21/01/1923' s={6} />
                </Row>
                <Row>
                  <Input name='group1' type='checkbox' label='Do you have a disability or impairment' />
                </Row>
                <Row>
                  <Input className='disability-question' label='If yes please state' s={12} offset='s2 m2 l2' />
                </Row>
                <Button  className='submit-button' waves='light' large={false}>Save</Button>
              </Col>
            </Row>
          </Tab>

            <Tab title='my LEQs' active={this.state.tab3}>
              <Results results={this.state.results} />
            </Tab>
            <Tab title='about the LEQ' active={this.state.tab4}>
              <AboutSlider />
            </Tab>
          </Tabs>
        </Col>
        <Col s={2} m={2} l={2}>
          <div className='logo-container'>
            <img src='https://files.gitter.im/andrewMacmurray/london-youth-hackathon/eJwF/LY_Master_Mono_Black_RGB.png' />
          </div>
        </Col>
    </Row>
    )
  }
}

export default Home

// LEQ stands for the Life Effectiveness Questionaire.
//
// We use it to understand how young people think and feel about themselves.
// When you complete the LEQ, you will be asked a series of questions. Its not a test and there are no
// no right or wrong answers. Everyone will have different responses.
