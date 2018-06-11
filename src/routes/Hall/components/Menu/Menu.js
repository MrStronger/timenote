import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import './Menu.scss'

class Menu extends Component {
  constructor () {
    super()
    this.state = {
      sty: {
        height: 0
      }
    }
  }
  static propTypes = {
    MenuOption: PropTypes.string,
    fetchInItData: PropTypes.func,
  }
  handleClick = (e) => {
    let { sty } = this.state
    if (sty.height === 0) {
      this.setState({
        sty: {
          height: 40
        }
      })
    } else {
      this.setState({
        sty: {
          height: 0
        }
      })
    }
  }
  check = (search) => {
    let data = ['star', 'praise', 'like', 'edit']
    let result = data.filter((item) => {
      return search === item
    })
    return !(result.length === 0)
  }
  componentDidMount () {
    // console.log(this.props)
  }
  render () {
    let { MenuOption } = this.props
    let firstMenu = []
    let secondMenu = []
    let { MenuData } = require('./MenuOptionData')
    for (let i = 0, length = MenuData.length; i < length; i++) {
      let menuItem = (
        <li
          key={i}
          className={(this.check(MenuData[i].search) ? '' : 'hidden-xs') + (MenuOption === MenuData[i].filter ? ' active' : '')}
          onClick={() => this.props.fetchInItData({ search:MenuData[i].search, filter:MenuData[i].filter })}
            >
          <Link to={'/hall/' + MenuData[i].search}>
            {MenuData[i].title}
          </Link>
        </li>
      )
      if (i < 9) {
        firstMenu.push(menuItem)
      } else {
        secondMenu.push(menuItem)
      }
    }
    return (
      <div className='menu'>
        <ul className='first-menu'>
          {firstMenu}
          <li onClick={this.handleClick} className='hidden-xs'>
              其他学院
          <i className='fa fa-caret-down' />
          </li>
        </ul>
        <ul className='second-menu' style={this.state.sty}>
          {secondMenu}
        </ul>
      </div>
    )
  }
}

export default Menu
