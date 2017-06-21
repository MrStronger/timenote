import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import './CardCase.scss'

import CardCaseItem from './CardCaseItem/CardCaseItem'

class CardCase extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    isForAll: PropTypes.bool,
    title: PropTypes.string,
    field: PropTypes.object,
    fetchInItData: PropTypes.func
  }
  static defaultProps = {
    isForAll: false
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log(this.props === nextProps)
    if (this.props !== nextProps) return true
  }
  render () {
    let { items } = this.props
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
              <h2 onClick={() => this.props.fetchInItData(this.props.field)}>
                <Link to={'/hall?' + this.props.field.search}>
                  {this.props.title}
                </Link>
              </h2>
              <span onClick={() => this.props.fetchInItData(this.props.field)}>
                <Link to={'/hall?' + this.props.field.search}>
                  查看全部
                </Link>
              </span>
            </div>
          )
        }
        <ul className='card-case'>
          {cards}
        </ul>
      </div>
    )
  }
}

export default CardCase
