import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FollowNav from './FollowNav'
import FollowMsg from './FollowMsg'
import ArticleToggle from './ArticleToggle'
import ArticleContainer from '../../../containers/ArticleContainer' // 这里应该引入container, 引入component是因为要测试

export default class Follow extends Component {
  static propTypes = {
    user_id: PropTypes.string.isRequired,
    currentFollow: PropTypes.string.isRequired,
    currentToggle: PropTypes.string.isRequired,
    changeFollow: PropTypes.func.isRequired,
    changeToggle: PropTypes.func.isRequired
  }
  render () {
    const { user_id, currentFollow, currentToggle, changeFollow, changeToggle } = this.props
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-md-offset-1'>
            <FollowNav user_id={user_id} changeFollow={changeFollow} />
          </div>
          <div className='col-md-8'>
            <FollowMsg follow_id={currentFollow} />
            <ArticleToggle sign={false} changeToggle={changeToggle} />
            <ArticleContainer user_id={currentFollow} toggleState={currentToggle} />
          </div>
        </div>
      </div>
    )
  }
}
