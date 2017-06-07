import React, { Component } from 'react'
import './ArticleItem.scss'

export default class ArticleItem extends Component {
  render () {
    return (
      <div className='have-img relative'>
        <a href='' className='note-img absolute inlineblock' target='_blank'>
          <img src='http://upload-images.jianshu.io/upload_images/3459828-2b02b6a81c1e5c4c.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/240' />
        </a>
        <div className='note-text'>
          <div className='author'>
            <a className='avatar inlineblock' target='_blank' href=''>
              <img src='http://upload.jianshu.io/users/upload_avatars/1517038/de700590cd50.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96' alt='96' />
            </a>
            <a className='' target='_blank' href=''>冬洱</a>
            <span className='time' data-shared-at=''>今天 11:01</span>

          </div>
          <h3 className=''><a className='note-title' target='_blank' href=''>2017想要发现一个新的自己，从坚持几个小习惯开始吧</a></h3>
          <p className='note-ellipsis hidden-xs '>
                    每一件小事坚持到一定时间，时间会给你答案。对于学习也不上心，突然之间想要在操场上走一会，然后就变成了跑一跑。...
                </p>
          <div className='meta'>
            <a className='label' target='_blank' href=''>大学生活</a>
            <a className='icon-set '><i className='fa fa-eye' />448</a>
            <a className='icon-set '><i className='fa fa-commenting-o' />51</a>
            <a className='icon-set '><i className='fa fa-heart' />214</a>
            <a className='icon-set '><i className='fa fa-thumbs-up' />115</a>
          </div>
        </div>
      </div>
    )
  }
}
