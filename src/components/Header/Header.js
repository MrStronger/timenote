import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import logoImg from './assets/logo.png'
import './Header.scss'

class Header extends Component {
  constructor () {
    super()
    this.showNavHandleClick = this.showNavHandleClick.bind(this)
  }

  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    profile: PropTypes.object.isRequired,
    onSignOut: PropTypes.func.isRequired
  }

  showNavHandleClick () {
    let res = this.refs.xsToggleResponse
    res.style.height === '0px' ? res.style.height = '30px' : res.style.height = '0px'
  }

  render () {
    const { isAuth, profile, onSignOut } = this.props
    let userAvatar = []
    if (isAuth) {
      userAvatar = [<li key='user' className='dropdown'>
        <Link to={profile.link}>
          <img src={profile.img} alt={profile.userName} />
        </Link>

        <ul className='dropdown-menu' role='menu'>
          <li><Link to='/'><i className='fa fa-bell' />消息</Link></li>
          <li><Link onClick={onSignOut}><i className='fa fa-sign-out' />退出登录</Link></li>
        </ul>
      </li>]
    } else {
      userAvatar = [<li key='log'><Link to='/sign' activeClassName='active'>登录</Link></li>, <li key='reg'><Link to='/sign' activeClassName='active'>注册</Link></li>]
    }

    return (
      <div>
        <nav className='navbar'>
          <div className='width-limit clearfix'>
            <div className='logo absolute'><IndexLink to='/' className='relative'><img src={logoImg} /></IndexLink></div>
            <ul className='right list-inline hidden-lg xs-toggle'>
              <li><Link to='/hall' className=''><span className='icon-xsnav icon-famous block' /></Link></li>
              <li><button type='button' className='navbar-toggle block' onClick={this.showNavHandleClick}>
                <span className='icon-xsnav icon-menu block' />
              </button></li>
            </ul>

            <ul className='left list-inline hidden-xs nav-left' ref='userArea'>
              <li><IndexLink to='/' activeClassName='active'>发现</IndexLink></li>
              <li><Link to='/focus' activeClassName='active'>关注</Link></li>
              <li><Link to='/hall' activeClassName='active'>名人堂</Link></li>
            </ul>
            <ul className='right list-inline hidden-xs nav-right'>
              {userAvatar}
              <li><Link to='/write'>写文章</Link></li>
            </ul>
          </div>
        </nav>
        <ul className=' subnav list-inline text-center hidden-lg' id='navbar-collapse' ref='xsToggleResponse'>
          <li><Link to='/focus' />关注</li>
          <li><Link to='/sign' />登录</li>
          <li><Link to='/sign' />注册</li>
          <li><Link to='/write' />写文章</li>
        </ul>
        <ul className='subnav list-inline text-center hidden-xs'>
          <li><Link to='/' />学习</li>
          <li><Link to='/' />技术</li>
          <li><Link to='/' />生活</li>
          <li><Link to='/' />感想</li>
          <li><Link to='/' />情感</li>
        </ul>
      </div>
    )
  }
}

export default Header
