import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SliderDots extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    nowDot: PropTypes.number.isRequired,
    turn: PropTypes.func.isRequired
  }
  handleClick = (index) => {
    this.props.turn(index - this.props.nowDot)
  }
  render () {
    let dotNodes = []
    let { count, nowDot } = this.props
    for (let i = 1; i < count - 1; i++) {
      dotNodes.push(
        <span
          key={'dot' + i}
          onClick={() => this.handleClick(i)}
          className={nowDot === i || nowDot - i === count - 2 ? 'slider-dot slider-dot-selected' : 'slider-dot'}
           />
      )
    }
    return (
      <div className='slider-dots-wrap'>
        {dotNodes}
      </div>
    )
  }
}

export default SliderDots
