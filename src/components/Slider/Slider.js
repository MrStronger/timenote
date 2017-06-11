import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Slider.scss'

import SliderItem from './SliderItem/SliderItem'
import SliderDots from './SiderDots//SliderDots'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class Carousel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nowDot: 1,
      prevDot: 1,
      action: ''
    }
  }
  static propTypes = {
    items: PropTypes.array.isRequired,
    speed: PropTypes.number,
    delay: PropTypes.number,
    stop: PropTypes.bool,
    autoplay: PropTypes.bool
  }
  static defaultProps = {
    items: [],
    speed: 1,
    delay: 4,
    stop: true,
    autoplay: true,
  }
  componentDidMount () {
    this.start()
  }
  componentWillUnmount () {
    this.stop()
  }
  start = () => {
    if (this.props.autoplay) {
      this.interVal = setInterval(() => {
        this.turn(1)
      }, this.props.delay * 1000)
    }
  }
  stop = () => {
    clearInterval(this.interVal)
  }
  turn = (n) => {
    let slider = this.refs.Slider
    var newN = this.state.nowDot + n
    if (n > 0) {
      this.setState({
        action: 'next'
      })
    } else {
      this.setState({
        action: 'prev'
      })
    }
    if (newN < 0) {
      newN = newN + this.props.items.length - 1
    }
    if (newN >= this.props.items.length) {
      newN = newN - this.props.items.length + 1
    }
    this.setState({
      nowDot: newN,
      prevDot: this.state.nowDot
    })
    if (slider.style.left === '-500%' && n === 1) {
      sleep(1000).then(() => {
        this.setState({
          nowDot: 1,
          prevDot: newN
        })
      })
      return false
    }
    /* if (this.state.nowDot === 1 && n === -1) {
      console.log('跳到最后一张')
      sleep(1000).then(() => {
        this.setState({
          nowDot: this.props.items.length - 2,
          prevDot: newN
        })
      })
    } */
  }
  render () {
    let count = this.props.items.length
    let itemNodes = this.props.items.map((item, index) => {
      return <SliderItem item={item} count={count} key={'item' + index} />
    })
    let dotsNodes = <SliderDots count={count} nowDot={this.state.nowDot} turn={this.turn} />
    return (
      <div
        className='slider'
        onMouseOver={this.props.stop ? this.stop : null}
        onMouseOut={this.props.autoplay ? this.start : null}
          >
        <ul ref='Slider'
          style={{
            left: -100 * this.state.nowDot + '%',
            transitionDuration: (this.state.prevDot === (count - 1) && this.state.action === 'next') || (this.state.prevDot === 0 && this.state.action === 'prev') ? '' : this.props.speed + 's',
            width: this.props.items.length * 100 + '%'
          }}
            >
          {itemNodes}
        </ul>
        {dotsNodes}
      </div>
    )
  }
}

export default Carousel
