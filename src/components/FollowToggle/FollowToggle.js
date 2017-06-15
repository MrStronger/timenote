import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './FollowToggle.scss'

export default class FollowToggle extends Component {
  constructor () {
    super()
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      isFollow: false
    }
  }
  static propTypes = {
    follow_id: PropTypes.string.isRequired
  }
  handleToggle () {
    fetch('./index.php?s=/index/User/follow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `followed_user_id=${this.props.follow_id}`,
      credentials: 'same-origin'
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    }).then(() => {
      this.setState({ isFollow: !this.state.isFollow })
    }).catch(error => {
      console.log('request failed', error)
    })
  }
  render () {
    let content
    this.state.isFollow ? content = <i className='followed'>已关注</i> : content = <i className='fa fa-plus'>关注</i>
    return (
      <div className='followToggle' onClick={this.handleToggle}>
        {content}
      </div>
    )
  }
}
