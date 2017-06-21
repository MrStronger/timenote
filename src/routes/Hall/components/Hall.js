import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Hall.scss'

import Slider from '../../../components/Slider/Slider'
import Menu from './Menu/Menu'
import CardCase from '../components/CardCases/index'
import Spinner from '../../../components/Spinner/Spinner'

import { sortBy } from '../../../util/array'
import { formData } from './Menu/MenuOptionData'

import '../../../styles/core.scss'

export default class Hall extends Component {
  static propTypes = {
    fetching: PropTypes.bool,
    fetchInItData: PropTypes.func,
    fetchUpdate: PropTypes.func,
    MenuOption: PropTypes.string,
    data: PropTypes.array
  }
  handleScroll = (e) => {
    let scrollTop = document.body.scrollTop
    let scrollHeight = window.scrollHeight
    let clientHeight = document.body.clientHeight
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    let { search } = this.props.location
    let filter = formData(require('./Menu/MenuOptionData').MenuData, search.slice(1))
    this.props.fetchInItData(filter)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }
  render () {
    let { fetchInItData, MenuOption, data, fetchUpdate, fetching } = this.props
    let search = this.props.location.search.slice(1)
    let cardCase = []
    if (MenuOption === 'SHOW_ALL') {
      if (data.length !== 0) {
        let newData = data.map((item, index) => {
          item.index = index
          return item
        })
        let filters = ['star', 'praise', 'like', 'edit']
        let allFilterData = require('./Menu/MenuOptionData').MenuData
        let filterCase = filters.map((item, inedx) => {
          return (
            formData(allFilterData, item)
          )
        })
        cardCase = filterCase.map((item, index) => {
          return (
            <CardCase
              key={item.search}
              items={sortBy(newData, item.number).slice(0, 4)}
              isForAll={MenuOption === 'SHOW_ALL'}
              title={item.title}
              field={{ search: item.search, filter: item.filter }}
              fetchInItData={fetchInItData}
            />
          )
        })
      }
    } else {
      let newData = data.map((item, index) => {
        item.index = index
        return item
      })
      if (data.length !== 0) {
        cardCase = (
          <CardCase
            items={newData}
          />
        )
      }
    }
    return (
      <div>
        <Slider items={sliderData} />
        <Menu
          MenuOption={this.props.MenuOption}
          fetchInItData={fetchInItData}
        />
        <div className='container pd-top-40'>
          {cardCase}
        </div>
        <div className='relative'>
          <Spinner text='加载中...' show={fetching} />
        </div>
        <span onClick={() => fetchUpdate(search)}>加载更多</span>
      </div>
    )
  }
}

const sliderData = [
  {
    src: require('../../../../public/images/02.jpg'),
    alt: '2图'
  },
  {
    src: require('../../../../public/images/01.jpg'),
    alt: '名人堂'
  },
  {
    src: require('../../../../public/images/03.jpg'),
    alt: '6图'
  },
  {
    src: require('../../../../public/images/02.jpg'),
    alt: '2图'
  },
  {
    src: require('../../../../public/images/01.jpg'),
    alt: '名人堂'
  }
]
