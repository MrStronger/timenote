import React from 'react'
import Recommend from '../../../components/Recommend/Recommend'// 这里应该引入Container，引入component是因为要测试
import ArticleItem from '../../..//components/ArticleItem/ArticleItem'// 这里也是
import './HomeView.scss'

export const HomeView = () => (
  <div className='container'>
    <div className='row'>
      <div className='hidden-xs hidden-sm col-md-3 recommendLabels'>
        <Recommend type='labels' data={labelData} />
      </div>
      <div className='col-xs-12 col-md-7'>
        <ArticleItem data={articleData} />
      </div>
      <div className='hidden-xs hidden-sm col-md-3 recommendAuthors'>
        <Recommend type='authors' data={authorData} />
      </div>
    </div>
  </div>
)

export default HomeView


/**
 * 测试用的数据
 */
let articleData = {
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
  }
]
let authorData = [
  {
    id: '1',
    link: 'user.link',
    img: './images/dream.png',
    userName: '梦想',
    writeNum: '20.1k',
    like: 256,
    follow: 896
  },
  {
    id: '2',
    link: 'user.link',
    img: './images/community.png',
    userName: '社区',
    writeNum: '20.1k',
    like: 256,
    follow: 896
  },
  {
    id: '3',
    link: 'user.link',
    img: './images/exercise.png',
    userName: '锻炼',
    writeNum: '20.1k',
    like: 256,
    follow: 896
  },
  {
    id: '4',
    link: 'user.link',
    img: './images/game.png',
    userName: '游戏',
    writeNum: '20.1k',
    like: 256,
    follow: 896
  },
  {
    id: '5',
    link: 'user.link',
    img: './images/love.png',
    userName: '爱情',
    writeNum: '20.1k',
    like: 256,
    follow: 896
  }
]
