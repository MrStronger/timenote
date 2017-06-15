import React from 'react'
import Recommend from '../../../components/Recommend/Recommend'// 这里应该引入Container，引入component是因为要测试
import ArticleItem from '../../../components/ArticleItem/ArticleItem'// 这里也是
import Slider from '../../../components/Slider/Slider'
import './HomeView.scss'
import '../../../styles/core.scss'

export const HomeView = () => {
  const normal =
    <div className='row'>
      <div className='hidden-xs col-sm-3 col-md-3 recommendLabels'>
        <Recommend type='labels' data={labelData} />
      </div>
      <div className='col-xs-13 col-sm-7 col-md-7 mainBody'>
        <Slider items={images} />
        <ArticleItem data={articleData} />
      </div>
      <div className='hidden-xs col-sm-3 col-md-3 recommendAuthors'>
        <Recommend type='authors' data={authorData} />
      </div>
    </div>
  const ipad =
    <div className='row'>
      <div className='col-xs-13 col-sm-9 col-md-9 ipad-class'>
        <Slider items={images} />
        <ArticleItem data={articleData} />
      </div>
      <div className='hidden-xs col-sm-4 col-md-4 ipad-class'>
        <Recommend type='authors' data={authorData} />
        <Recommend type='labels' data={labelData} />
      </div>
    </div>
  if (window.screen.width >= 768 && window.screen.width <= 992) {
    return (
      <div className='container'>
        {ipad}
      </div>
    )
  } else {
    return (
      <div className='container'>
        {normal}
      </div>
    )
  }
}

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

const images = [
  {
    src: './images/03.jpg',
    alt: '03.jpg'
  },
  {
    src: './images/01.jpg',
    alt: '01.jpg'
  },
  {
    src: '/images/05.jpg',
    alt: '05.jpg'
  },
  {
    src: './images/02.jpg',
    alt: '02.jpg'
  },
  {
    src: './images/03.jpg',
    alt: '03.jpg'
  },
  {
    src: './images/01.jpg',
    alt: '01.jpg'
  }
]
