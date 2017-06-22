import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleItem from '../components/ArticleItem/ArticleItem'
import { ajax } from '../tools/Ajax'

export default class ArticleContainer extends Component {
  state = {
    data: []
  }
  static propTypes = {
    user_id: PropTypes.string.isRequired,
    toggleState: PropTypes.string.isRequired
  }
  getData (props) {
    ajax(this, `a/${props.user_id}&${props.toggleState}`, 'src/containers/ArticleContainer.js')
  }
  componentWillMount () {
    this.getData(this.props)
  }
  componentWillReceiveProps (nextProps) {
    this.getData(nextProps)
  }
  render () {
    let articleItems = []
    this.state.data.forEach((item, index) => {
      articleItems.push(<ArticleItem key={index} data={item} />)
    })
    return (
      <div>
        {articleItems}
      </div>
    )
  }
}

let articleData = [
  {
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
  },
  {
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
]
