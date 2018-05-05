import React from 'react'
import Recommend from '../containers/RecommendContainer'
import ArticleContainer from '../../../containers/ArticleContainer'
import Slider from '../../../components/Slider/Slider'
import './HomeView.scss'
import '../../../styles/core.scss'

export const HomeView = () => {
  if (window.screen.width >= 768 && window.screen.width <= 992) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-13 col-sm-9 col-md-9 ipad-class'>
            <Slider items={images} />
            <ArticleContainer uid='' toggleState='' />
          </div>
          <div className='hidden-xs col-sm-4 col-md-4 ipad-class'>
            <Recommend type='authors' />
            <Recommend type='labels' />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <div className='row'>
          <div className='hidden-xs col-sm-3 col-md-3 recommendLabels'>
            <Recommend type='labels' />
          </div>
          <div className='col-xs-13 col-sm-7 col-md-7 mainBody'>
            <Slider items={images} />
            <ArticleContainer uid='' toggleState='' />
          </div>
          <div className='hidden-xs col-sm-3 col-md-3 recommendAuthors'>
            <Recommend type='authors' />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeView
/**
 * 测试用的数据
 */
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
