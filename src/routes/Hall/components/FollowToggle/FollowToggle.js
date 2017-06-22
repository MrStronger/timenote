import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './FollowToggle.scss'

class FollowToggle2 extends Component {
  static propTypes = {
    isFollow: PropTypes.bool,
    index: PropTypes.number,
    id:PropTypes.number,
    fetchAddAttention: PropTypes.func,
    fetchCancelAttention: PropTypes.func
  }
  static defaultProps = {
    isFollow: false
  }
  componentDidMount () {
    
  }
  render () {
    let { index, id, isFollow, fetchAddAttention, fetchCancelAttention } = this.props
    return (
      <div
        className='toggle'
        onClick={isFollow ? () => fetchCancelAttention({ id:id, index: index }) : () => fetchAddAttention({ id: id, index: index })}
        >
        {isFollow ? <i className='followed'>已关注</i> : <i className='fa fa-plus'>关注</i>}
      </div>
    )
  }
}

export default FollowToggle2
