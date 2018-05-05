import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FollowToggle from '../../../components/FollowToggle/FollowToggle'
import './styles/UserMsg.scss'
import { ajax } from '../../../tools/Ajax'

export default class UserMsg extends Component {
  state = {
    data: {
      uid: '',
      isFollow: false,
      medal: [],
      data: {
        articleNum: 0,
        follow: 0,
        like: 0,
        love: 0
      }
    }
  }
  static propTypes = {
    mainUserId: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired
  }
  componentWillMount () {
    ajax(this, `u/${this.props.uid}`, 'src/routes/Follow/components/FollowMsg.js')
  }
  render () {
    const { mainUserId, uid } = this.props
    const data = this.state.data
    let medals = []
    data.medal.forEach((item, index) => {
      medals.push(<a className='madalLabel' key={index}>{item}</a>)
    })
    return (
      <div className='userMsg'>
        <div className='user-img'>
          <a className='avatar block'>
            <img src={data.user_img} alt={data.nickname} />
          </a>
        </div>
        <div className='user-msg'>
          <a className='name'>{data.nickname}</a><span className='sex-age'>{ data.sex ? <i className='fa fa-mars' /> : <i className='fa fa-venus' />}{data.age + ' ' + data.academy}</span>
          <p className='signature'>{data.signature}</p>
          <p className='info'>
            <a><i className='fa fa-pencil' />{data.data.articleNum}</a>
            <a><i className='fa fa-eye' />{data.data.follow}</a>
            <a><i className='fa fa-thumbs-up' />{data.data.like}</a>
            <a><i className='fa fa-heart' />{data.data.love}</a>
          </p>
          {uid === mainUserId ? null : <FollowToggle follow_id={data.uid} isFollow={data.isFollow} />}
          <h5>个人介绍</h5>
          <p className='introduction'>
            {data.introduction}
          </p>
          <h5>个人成就</h5>
          <p className='introduction'>
            {data.achievement}
          </p>
          <h5>获得勋章</h5>
          <div className='medal text-center'>
            {medals}
          </div>
        </div>
      </div>
    )
  }
}
let userMsg = {
  uid: 'mofan12138',
  nickname: '莫凡',
  user_img: 'http://upload.jianshu.io/users/upload_avatars/6287/06c537002583.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
  age: 19,
  sex: 1,
  academy: '电院',
  signature: '来地球逛一圈',
  data: {
    articleNum: 10,
    follow: 542,
    like: 1558,
    love: 228
  },
  introduction: '软件工程大四学生，大三拿过阿里、腾讯、网易三家offer，在阿里实习，目前大四在阿里云就职。 西电前端领域神级人物，多次被邀请做讲座。 热爱跑步，热爱马拉松，大二时创办跑步协会。',
  achievement: '软件工程大四学生，大三拿过阿里、腾讯、网易三家offer，在阿里实习，目前大四在阿里云就职。 西电前端领域神级人物.大二时创办跑步协会。',
  medal: [
    '前端大牛',
    '学霸'
  ],
  email: '1274552194@qq.com',
  login_time: '2017.07.01',
  register_time: '2017.05.01'
}
