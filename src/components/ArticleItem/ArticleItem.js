import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ArticleItem.scss'

export default class ArticleItem extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    time: PropTypes.string.isRequired,
    article: PropTypes.object.isRequired,
    label: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  }
  static defaultProps = {
    user: {
      userId: '1vdf1',
      userName: '莫凡',
      link: '/sign',
      img: 'http://upload.jianshu.io/users/upload_avatars/2826570/ad8616930f55?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144'
    },
    time: '今天11:01',
    article: {
      link: '/hall',
      title: '那些“根”上的东西，才真正值得我们去追寻',
      img: ['http://upload-images.jianshu.io/upload_images/1767483-0fbcbe3c77ffe109.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'],
      body: '在我的记忆中，有两次考试经历，令我印象深刻。 都不算大考，一次期中，一次期末。 某年的期中考试，我拿了学年第一名，欢喜程度自无需多言，就差放炮庆祝了...',
    },
    label: {
      link: '/sign',
      name: '大学生活'
    },
    data: {
      follow: 23,
      comment: 46,
      collection: 14,
      like: 456
    }
  }
  render () {
    const { user, time, article, label, data } = this.props
    return (
      <div className='have-img relative'>
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
          <h2 className=''><a className='note-title' target='_blank' href={article.link}>{article.title}</a></h2>
          <p className='note-ellipsis'>
            {article.body}
          </p>
          <div className='meta'>
            <a className='label' target='_blank' href={label.link}>{label.name}</a>
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
