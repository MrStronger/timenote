import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Recommend from '../components/Recommend/Recommend'
import { ajax } from '../../../tools/Ajax'

export default class RecommendContainer extends Component {
  constructor () {
    super()
    this.state = {
      data: {
        labelData: [],
        authorData: []
      }
    }
  }
  static propTypes = {
    type: PropTypes.oneOf(['labels', 'authors'])
  }
  getAnother () {
    ajax(this, 'index/followRecommend/list', 'src/routes/Follow/containers/RecommendContainer.js')
  }
  componentDidMount () {
    this.getAnother()
  }
  render () {
    const { type } = this.props
    let recommends
    if (type === 'labels') {
      recommends = <Recommend type={type} data={this.state.data.labelData} getAnother={this.getAnother} />
    } else if (type === 'authors') {
      recommends = <Recommend type={type} data={this.state.data.authorData} getAnother={this.getAnother} />
    }
    
    return (
      <div>
        {recommends}
      </div>
    )
  }
}

let labelData = [
  {
    id: '1',
    link: 'label.link',
    img: './images/dream.png',
    labelName: '梦想',
    collection: 156,
    follow: 896
  },
  {
    id: '2',
    link: 'label.link',
    img: './images/community.png',
    labelName: '社区',
    collection: 156,
    follow: 896
  },
  {
    id: '3',
    link: 'label.link',
    img: './images/exercise.png',
    labelName: '锻炼',
    collection: 156,
    follow: 896
  },
  {
    id: '4',
    link: 'label.link',
    img: './images/game.png',
    labelName: '游戏',
    collection: 156,
    follow: 896
  },
  {
    id: '5',
    link: 'label.link',
    img: './images/love.png',
    labelName: '爱情',
    collection: 156,
    follow: 896
  },
  {
    id: '6',
    link: 'label.link',
    img: './images/saylove.png',
    labelName: '表白',
    collection: 156,
    follow: 896
  },
  {
    id: '7',
    link: 'label.link',
    img: './images/sing.png',
    labelName: '唱歌',
    collection: 156,
    follow: 896
  },
  {
    id: '8',
    link: 'label.link',
    img: './images/young.png',
    labelName: '青春',
    collection: 156,
    follow: 896
  }
]
let authorData = [
  {
    id: '1',
    link: 'user.link',
    img: 'http://upload.jianshu.io/users/upload_avatars/227071/68a01a26-356a-4e25-9aa4-cddd4b088ef7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
    userName: '莫凡',
    writeNum: '20.1k',
    like: 256,
    follow: 896
  },
  {
    id: '2',
    link: 'user.link',
    img: 'http://upload.jianshu.io/users/upload_avatars/23852/cc0c1e84a511.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
    userName: '徐林Grace',
    writeNum: '20.1k',
    like: 256,
    follow: 896
  },
  {
    id: '3',
    link: 'user.link',
    img: 'http://upload.jianshu.io/users/upload_avatars/3058130/fe1eee1f6ffc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
    userName: '魔鬼的赞歌',
    writeNum: '20.1k',
    like: 256,
    follow: 896
  },
  {
    id: '4',
    link: 'user.link',
    img: 'http://upload.jianshu.io/users/upload_avatars/3682352/f92c33799ac5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
    userName: 'Ann苳杭杭',
    writeNum: '20.1k',
    like: 256,
    follow: 896
  },
  {
    id: '5',
    link: 'user.link',
    img: 'http://upload.jianshu.io/users/upload_avatars/18451/913538140263.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144',
    userName: '怀左同学',
    writeNum: '20.1k',
    like: 256,
    follow: 896
  }
]
