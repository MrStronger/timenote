import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './CardCase.scss'

import CardCaseItem from './CardCaseItem/CardCaseItem'
import Spinner from '../../../../components/Spinner/Spinner'

import { sortBy } from '../../../../util/array'

class CardCases extends Component {
  static propTypes = {
    isAllPage: PropTypes.bool,
    data: PropTypes.array,
    fetching: PropTypes.bool,
    fetchUpdate: PropTypes.func
  }
  static defaultProps = {
    isAllPage: false
  }
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    let { loaction, fetchUpdate, data } = this.props
    let search = location.search.slice(1)
    let cardCase
    if (this.props.isAllPage) {
      if (data.length === 0) {
        cardCase = '暂时没有名人'
      } else {
        let followCase = sortBy(data, 'follow_number')
        console.log(followCase)
      }
    } else {
      if (data.length !== 0) {
        // 给每个item加上index属性
        let newData = data.map((item, index) => {
          item.index = index
          return item
        })
        cardCase = newData.map((item, index) => {
          return (
            <CardCaseItem
              key={index}
              data={item}
            />
          )
        })
      } else {
        cardCase = '暂时没有名人'
      }
    }
    return (
      <div className='container'>
        <div className='card'>
          <ul className='card-case'>
            {cardCase}
          </ul>
          <div className='loading'>
            <Spinner text='加载中...' show={this.props.fetching} />
          </div>
          <span onClick={() => fetchUpdate(search)}>加载更多</span>
        </div>
      </div>
    )
    
  }
}

export default CardCases
