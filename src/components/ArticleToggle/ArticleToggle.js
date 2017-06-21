import React, { Component } from 'react'
import { siblings } from '../../tools/DOMmethods'
import PropTypes from 'prop-types'
import './ArticleToggle.scss'

export default class ArticleToggle extends Component {
  static propTypes = {
    sign: PropTypes.bool.isRequired,
    changeToggle: PropTypes.func.isRequired
  }
  handleClick (e) {
    let target = e.target
    if (target && target.parentNode && target.nodeName.toUpperCase() === 'LI') {
      target.classList.add('li-active')
      siblings(target).forEach((item) => {
        item.classList.remove('li-active')
      })
    }
  }
  render () {
    const { sign = false, changeToggle } = this.props
    let rest = []
    if (sign) {
      rest = [
        <li key='follow' onClick={() => changeToggle('follow')}><i className='fa fa-eye' />Ta的关注</li>,
        <li key='love' onClick={() => changeToggle('love')}><i className='fa fa-heart' />Ta喜欢的文章</li>
      ]
    }
    return (
      <ul className='note-trigger list-inline' onClick={(e) => this.handleClick(e)}>
        <li onClick={() => changeToggle('new')} key='new' className='li-active'><i className='fa fa-paw' />最新动态</li>
        <li onClick={() => changeToggle('notes')} key='notes'><i className='fa fa-book' />Ta的笔记</li>
        <li onClick={() => changeToggle('hot')} key='hot'><i className='fa fa-fire' />热门</li>
        {rest}
      </ul>
    )
  }
}
