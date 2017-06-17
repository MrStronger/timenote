import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/ArticleToggle.scss'

export default class ArticleToggle extends Component {
  static propTypes = {
    sign: PropTypes.bool.isRequired,
    changeToggle: PropTypes.func.isRequired
  }
  render () {
    const { sign = false, changeToggle } = this.props
    let rest = []
    if (sign) {
      rest = [
        <li><a><i className='fa fa-book' />Ta的关注</a></li>,
        <li><a><i className='fa fa-fire' />Ta喜欢的文章</a></li>
      ]
    }
    return (
      <ul className='note-trigger list-inline'>
        <li onClick={() => changeToggle('new')}><a><i className='fa fa-paw' />最新动态</a></li>
        <li onClick={() => changeToggle('notes')}><a><i className='fa fa-book' />Ta的笔记</a></li>
        <li onClick={() => changeToggle('hot')}><a><i className='fa fa-fire' />热门</a></li>
        {rest}
      </ul>
    )
  }
}
