import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import './Menu.scss'

class Menu extends Component {
  static propTypes = {
    MenuOption: PropTypes.string,
    fetchInItData: PropTypes.func,
  }
  componentDidMount () {
    // console.log(this.props)
  }
  render () {
    let menu = require('./MenuOptionData').MenuData.map((item, index) => {
      return (
        <Link to={'/hall?' + item.search} key={index}>
          <li
            className={this.props.MenuOption === item.filter ? 'active' : ''}
            onClick={() => this.props.fetchInItData({ search:item.search, filter:item.filter })}
            >
            {item.title}
          </li>
        </Link>
      )
    })
    return (
      <ul className='menu'>
        {menu}
      </ul>
    )
  }
}

export default Menu
