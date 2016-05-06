import React from 'react'
import Slider from 'react-slick'
import {Row, Col} from 'react-materialize'
import Range from './Range.js'

export default class SlidQuestionnaire extends React.Component {

  render () {
    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false
    }

    const range = () => {
      return (
        <div class="range-slider">
          <input class="range-slider__range" type="range" value="1" min="1" max="8" />
          <span class="range-slider__value">0</span>
        </div>
      )
    }

    return (
      <div className='questionnaire'>
        <Row>
          <Col s={8} offset='s2'>
            <Slider {...settings}>
              <div><h5><div className='Qbubble'><div className='Qnumber'>1. </div></div> I plan and use my time efficiently</h5>{range()}</div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>2. </div></div> I am successful in social situations</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>3. </div></div> When working on a project, I do my best to get the details right</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>4. </div></div> I change my thinking or opinions easily if there is a better idea</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>5. </div></div> I can get people to work for me</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>6. </div></div> I can stay calm in stressful situations</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>7. </div></div> I like to be busy and actively involved in things</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>8. </div></div> I know I have the ability to do anything I want to do</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>9. </div></div> I do not waste time</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>10.</div></div> I am competent in social situations</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>11.</div></div> I try to get the best results when I do things</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>12.</div></div> I am open to new ideas</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>13.</div></div> I am a good leader when a task needs to be done</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>14.</div></div> I stay calm and overcome anxiety in new or changing situations</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>15.</div></div> I like to be active and energetic</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>16.</div></div> When I apply myself to something I am confident I will succeed</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>17.</div></div> I manage the way I use my time well</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>18.</div></div> I communicate well with people</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>19.</div></div> I try to do the best that I possibly can</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>20.</div></div> I am adaptable and flexible in my thinking and ideas</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>21.</div></div> As a leader I motivate other people well when tasks need doing</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>22.</div></div> I stay calm when things go wrong</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>23.</div></div> I like to be an active, ‘get into it’ person</h5></div>
              <div><h5><div className='Qbubble'><div className='Qnumber'>24.</div></div> I believe I can do it</h5></div>
            </Slider>
          </Col>
        </Row>
      </div>

    )
  }
}
