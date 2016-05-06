import React from 'react'
import Header from './Header/header_index.js'
import SlidQuestionnaire from './Questionnaire/Questionnaire.js'

import '../../scss/style.scss'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <SlidQuestionnaire />
        {this.props.children}
      </div>
    )
  }
}
