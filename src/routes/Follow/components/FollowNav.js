import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import './styles/FollowNav.scss'
import { siblings } from '../../../tools/DOMmethods'

export default class FollowNav extends Component {
  constructor () {
    super()
    this.handleActive = this.handleActive.bind(this)
    this.state = {
      clickedTab: 'all',
      data: []
    }
  }
  static propTypes = {
    uid: PropTypes.string.isRequired,
    changeFollow: PropTypes.func.isRequired
  }
  handleActive (e) {
    let target = e.target
    if (target && target.nodeName.toUpperCase() === 'LI') {
      target.classList.add('active')
      siblings(target).forEach((item) => {
        item.classList.remove('active')
      })
      this.setState({ clickedTab: target.id })
    }
  }
  componentDidMount () {
    fetch(`https://easy-mock.com/mock/5947a6428ac26d795f3f8e99/timenote/follow/list/${this.props.uid}`)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json()
        }
      }).then(data => {
        if (data.status === 200 && data.statusText === 'OK') {
          this.props.changeFollow(data.data[0].uid)
          this.setState({ data: data.data })
        } else {
          console.log('request failed')
        }
      }).catch((err) => console.log('src/routes/Follow/components/FollowNav.js', err))
    
  }
  componentWillUnmount () {
    this.props.changeFollow('')
  }
  content (index, item) {
    const { changeFollow } = this.props
    return (
      <li key={index} onClick={() => changeFollow(item.uid)}>
        <a className='avatar inlineblock'><img src={item.img} alt={item.name} /></a>
        <a className='name'>{item.name}</a>
      </li>
    )
  }
  
  render () {
    let allItems = [], authorItem = [], labelItem = [], items = []
    if (this.state.data.length !== 0) {
      this.state.data.forEach((item, index) => {
        allItems.push(this.content(index, item))
        item.type === 'author' ? authorItem.push(this.content(index, item)) : labelItem.push(this.content(index, item))
      })
      if (authorItem.length === 0) {
        authorItem = [
          <li key='noAuthor'>还没有关注任何作者,去<Link to='/hall'>名人堂</Link>看看吧！</li>
        ]
      } else if (labelItem.length === 0) {
        labelItem = [
          <li key='noLabel'>还没有关注任何标签,去<IndexLink to='/'>首页</IndexLink>看看吧！</li>
        ]
      }
    } else {
      allItems = [
        <li key='noneOfFollow'>Hey,看来你是新人，<IndexLink to='/'>首页</IndexLink>有很多精彩的内容!</li>
      ]
    }
    switch (this.state.clickedTab) {
      case 'all': items = allItems; break
      case 'author': items = authorItem; break
      case 'label': items = labelItem; break
    }
    return (
      <div className='follow-tab'>
        <p className='title'>
          我的关注
        </p>
        <ul className='follow-nav list-inline' onClick={this.handleActive} id='followNav'>
          <li className='active' id='all'>全部</li><li id='author'>作者</li><li id='label'>标签</li>
          <div className='right'><Link to='/hall'><i className='fa fa-plus' /></Link></div>
        </ul>
        <ul className='content' onClick={(e) => {
          let target = e.target
          if (target && target.nodeName.toUpperCase() === 'LI') {
            target.style.backgroundColor = '#dcdcdc'
            siblings(target).forEach((item) => {
              item.style.backgroundColor = 'inherit'
            })
          }
        }}>
          {items}
        </ul>
      </div>
    )
  }
}
let followData = [
  {
    type: 'author',
    uid: '1',
    img: 'http://upload.jianshu.io/users/upload_avatars/6287/06c537002583.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
    name: '刘淼'
  },
  {
    type: 'author',
    uid: '2',
    img: 'http://upload.jianshu.io/users/upload_avatars/6287/06c537002583.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
    name: '王二哈'
  },
  {
    type: 'author',
    uid: '3',
    img: 'http://upload.jianshu.io/users/upload_avatars/6287/06c537002583.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
    name: '马男'
  }
]