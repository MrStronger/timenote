import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Hall.scss'

import Slider from '../../../components/Slider/Slider'
import Menu from './Menu/Menu'

export default class Hall extends Component {
  static propTypes = {
    fetchInItData: PropTypes.func,
    MenuOption: PropTypes.string,
  }
  render () {
    let { fetchInItData, MenuOption } = this.props
    return (
      <div>
        <Slider items={sliderData} />
        <Menu
          MenuOption={MenuOption}
          fetchInItData={fetchInItData}
        />
        <div className='container pd-top-40'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const sliderData = [
  
  {
    src: require('../../../../public/images/88.png'),
    alt: '名人堂'
  },
  {
    src: require('../../../../public/images/88.png'),
    alt: '名人堂'
  },
  {
    src: require('../../../../public/images/88.png'),
    alt: '名人堂'
  },
  {
    src: require('../../../../public/images/88.png'),
    alt: '名人堂'
  },
]
