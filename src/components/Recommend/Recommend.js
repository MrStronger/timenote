import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import FollowToggle from '../FollowToggle/FollowToggle'
import './Recommend.scss'

export default class Recommend extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['labels','authors']),
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    getAnother: PropTypes.func.isRequired
  }

  render () {
    const { data } = this.props
    let recommends = []
    let title = ''
    data.forEach((item, index) => {
      if (this.props.type === 'labels') {
        title = '精选标签'
        recommends.push(
          <div key={item.id} className='label-container'>
            <img src={item.img} />
            <a href={item.link}>{item.labelName}</a>
            <span className='hidden-sm'>
              <i className='fa fa-briefcase' />{item.collection}
              {' '}
              <i className='fa fa-eye' />{item.follow}
            </span>
            <FollowToggle follow_id={item.id} />
          </div>
        )
      } else {
        title = '推荐作者'
        recommends.push(
          <div key={item.id} className='relative author-container'>
            <a href={item.link} className='avatar left'><img src={item.img} /></a>
            <FollowToggle follow_id={item.id} className='followToggle' />
            <a href={item.link} className='name'>{item.userName}</a>
            <p className='info'>
              <a className='icon-set'><i className='fa fa-pencil' />{item.writeNum}</a>
              <a className='icon-set'><i className='fa fa-eye' />{item.follow}</a>
              <a className='icon-set'><i className='fa fa-thumbs-up' />{item.like}</a>
            </p>
          </div>
        )
      }
      
    })
    return (
      <div className='recommend'>
        <div className='title'>
          <a className='change right' onClick={this.props.getAnother}>换一批</a>
          <span>{title}</span>
        </div>
        {recommends}
        <Link to='/hall' className='block text-center findmore borderbox' target='_blank'>查看全部 <i className='fa fa-angle-right' /></Link>
      </div>
    )
  }
}
Recommend.defaultProps = {
  
}
