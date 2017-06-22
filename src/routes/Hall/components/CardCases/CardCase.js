import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import './CardCase.scss'

import CardCaseItem from './CardCaseItem/CardCaseItem'
import Spinner from '../../../../components/Spinner/Spinner'

import { getScrollHeight, getWindowHeight, getScrollTop } from '../../../../tools/scroll'

class CardCase extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    fetching: PropTypes.bool,
    isForAll: PropTypes.bool,
    search: PropTypes.string, // 当menu项不为all时，所传入的值
    fetchUpdate: PropTypes.func,
    title: PropTypes.string, // 当menu为all时
    field: PropTypes.object, // 当menu为all时
    fetchInItData: PropTypes.func
  }
  static defaultProps = {
    isForAll: false
  }
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props !== nextProps) return true
  }
  handleScroll = (e) => {
    if (getScrollHeight() <= getScrollTop() + getWindowHeight()) {
      if (!this.props.isForAll) {
        let { search, fetchUpdate } = this.props
        fetchUpdate(search)
      }
    }
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }
  render () {
    let { items, fetching } = this.props
    let cards = items.map((item, index) => {
      return (
        <CardCaseItem
          key={index}
          data={item}
          />
      )
    })
    return (
      <div className='card'>
        {
          !this.props.isForAll ? '' : (
            <div className='card-header'>
              <h2>
                <Link to={'/hall/' + this.props.field.search}>
                  <span onClick={() => this.props.fetchInItData(this.props.field)}>
                    {this.props.title}
                  </span>
                </Link>
              </h2>
              <span onClick={() => this.props.fetchInItData(this.props.field)}>
                <Link to={'/hall/' + this.props.field.search}>
                  查看全部
                </Link>
              </span>
            </div>
          )
        }
        <ul className='card-case'>
          {cards}
        </ul>
        <div className='relative'>
          <Spinner text='加载中...' show={fetching} />
        </div>
      </div>
    )
  }
}

export default CardCase
