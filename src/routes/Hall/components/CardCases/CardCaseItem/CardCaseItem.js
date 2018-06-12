import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './CardCaseItem.scss'

import FollowToggles from '../../../containers/FollowToggleContainer'
import Meta from '../../../../../components/Meta/Meta'


class CardCaseItem extends Component {
  static propTypes = {

  }
  componentDidMount () {
  }
  
  render () {
    let { data } = this.props
    return (
      <li className='card-item'>
        <div className='card-logo'>
          <img src={data.img} />
        </div>
        <div className='star-info'>
          <div className='star-follow'>
            <a>{data.userName}</a>
            <FollowToggles index={data.index} id={data.id} isFollow={data.isFollow} />
          </div>
          <p className='star-detail'>
						软件工程大四学生，大三拿过阿里、腾讯、网易三家offer，在阿里实习，目前大四在阿里云就职。
						西电前端领域神级人物，多次被邀请做讲座热爱跑步，热爱马拉松，大二时创办跑步协会。
          </p>
          <div className='tags'>
            {
              data.tags.map((item, index) => {
                return (
                  <a className='tag' key={index}>
                    {item}
                  </a>
                )
              })
            }
          </div>
          <div className='metas'>
            <Meta icon='edit' numbers={data.edit_number} />
            <Meta icon='eye' numbers={data.star_number} />
            <Meta icon='heart' numbers={data.like_number} />
            <Meta icon='thumbs-up' numbers={data.praise_number} />
          </div>
        </div>
      </li>
    )
  }
}

export default CardCaseItem
