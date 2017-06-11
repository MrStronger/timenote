import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ArticleItem.scss'

export default class ArticleItem extends Component {
  static propTypes = {
    data: PropTypes.shape({
      user: PropTypes.object.isRequired,
      time: PropTypes.string.isRequired,
      article: PropTypes.object.isRequired,
      label: PropTypes.object.isRequired,
      data: PropTypes.object.isRequired
    })
  }
  static defaultProps = {

  }
  render () {
    const { user, time, article, label, data } = this.props.data
    return (
      <div className='atricle-item relative'>
        <a href={article.link} className='note-img absolute inlineblock' target='_blank'>
          <img src={article.img[0]} />
        </a>
        <div className='note-text'>
          <div className='author'>
            <a className='avatar inlineblock' target='_blank' href={user.link}>
              <img src={user.img} alt={user.userName} />
            </a>
            <a className='authorName' target='_blank' href={user.link}>冬洱</a>
            <span className='time'>{time}</span>

          </div>
          <h2 className='font-xs'><a className='note-title' target='_blank' href={article.link}>{article.title}</a></h2>
          <p className='note-ellipsis hidden-xs'>
            {article.body}
          </p>
          <div className='meta'>
            <a className='label hidden-xs' target='_blank' href={label.link}>{label.name}</a>
            <a className='icon-set '><i className='fa fa-eye' />{data.follow}</a>
            <a className='icon-set ' href={article.link + '#comments'}><i className='fa fa-commenting-o' />{data.comment}</a>
            <a className='icon-set '><i className='fa fa-heart' />{data.collection}</a>
            <a className='icon-set '><i className='fa fa-thumbs-up' />{data.like}</a>
          </div>
        </div>
      </div>
    )
  }
}
