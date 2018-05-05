import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FollowNav from './FollowNav'
import FollowMsg from './FollowMsg'
import ArticleToggle from '../../../components/ArticleToggle/ArticleToggle'
import ArticleContainer from '../../../containers/ArticleContainer' // 这里应该引入container, 引入component是因为要测试

export default class Follow extends Component {
  state = {
    rightSide: null
  }
  static propTypes = {
    uid: PropTypes.string.isRequired,
    currentFollow: PropTypes.string.isRequired,
    currentToggle: PropTypes.string.isRequired,
    changeFollow: PropTypes.func.isRequired,
    changeToggle: PropTypes.func.isRequired
  }
  componentWillReceiveProps (nextProps) {
    const { currentFollow, currentToggle, changeToggle } = nextProps
    console.log(currentFollow)
    this.setState({
      rightSide:
        <div className='col-sm-9 col-md-8'>
          <FollowMsg follow_id={currentFollow} />
          <ArticleToggle sign={false} changeToggle={changeToggle} />
          <ArticleContainer uid={currentFollow} toggleState={currentToggle} />
        </div>
    })
  }
  render () {
    const { uid, changeFollow } = this.props
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4 col-md-3 col-md-offset-1'>
            <FollowNav uid={uid} changeFollow={changeFollow} />
          </div>
          {this.state.rightSide}
        </div>
      </div>
    )
  }
}
