import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1><a href='http://realtcg.com/TimeNote/index.html' target='_blank'>时光笔记</a></h1>
    <IndexLink to='/' activeClassName='route--active'>
      <i className='fa fa-home' />
      Home
    </IndexLink>
    {' · '}
    <Link to='/focus' activeClassName='route--active'>
      <i className='fa fa-user' />
      关注
    </Link>
    {' · '}
    <Link to='/sign' activeClassName='route--active'>
      注册
    </Link>
    {' · '}
    <Link to='/hall' activeClassName='route--active'>
      Hall
    </Link>
    {' · '}
    <Link to='/route/88' activeClassName='route--active'>
      Route
    </Link>
    {' · '}
    <Link to='/notFound' activeClassName='route--active'>
      404
    </Link>
  </div>
)

export default Header
