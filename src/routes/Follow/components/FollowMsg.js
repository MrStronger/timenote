import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FollowToggle from '../../../components/FollowToggle/FollowToggle'
import './styles/FollowMsg.scss'

export default class FollowMsg extends Component {
  state = {
    data: followMsg
  }
  static propTypes = {
    follow_id: PropTypes.string.isRequired
  }
  componentDidMount () {
    /*fetch('./index.php?s=/index/Follow/msg', {
      method: 'POST',
      body: `${this.props.follow_id}`
    }).then(res => {
      if (res.ok) {
        const data = JSON.parse(res.json())
        if (data.status === 200 && data.returnMsg === 'OK') {
          this.setState({ data: data })
        } else {
          console.log('request failed', res.statusText)
        }
      }
    }).catch((err) => console.log('src/routes/Follow/components/FollowMsg.js', err))*/
  }
  render () {
    const data = this.state.data
    return (
      <div className='note-top relative clearfix'>
        <a href={data.link} className='avatar left'><img src={data.img} alt={data.name}/></a>
        <FollowToggle follow_id={data.id} />
        <a href={data.link} className='atr-option absolute'>个人主页</a>
        <a href={data.link} className='name'>莫凡</a>
        <p className='data'>
          <a className='icon-set'><i className='fa fa-pencil' />{data.writeNum}</a>
          <a className='icon-set'><i className='fa fa-eye' />{data.follow}</a>
          <a className='icon-set'><i className='fa fa-thumbs-up' />{data.like}</a>
        </p>
      </div>
    )
  }
}
let followMsg = {
  id: '15dsvv1sd',
  name: '莫凡',
  link: 's51v5sd1v5s1vd',
  img: 'http://upload.jianshu.io/users/upload_avatars/6287/06c537002583.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
  writeNum: 5156,
  follow: 5156,
  like: 5156,
}