import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SliderItem extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired
  }
  render () {
    let { count, item } = this.props
    let width = 100 / count + '%'
    return (
      <li className='slider-item' style={{ width: width }}>
        <a href='#'>
          <img src={item.src} alt={item.alt} />
        </a>
      </li>
    )
  }
}

export default SliderItem
