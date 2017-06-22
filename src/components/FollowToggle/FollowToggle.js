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
    follow_id: PropTypes.string.isRequired,
    isFollow: PropTypes.bool.isRequired
  }
  componentWillReceiveProps (nextProps) {
    this.setState({ isFollow: nextProps.isFollow })
  }
  handleToggle () {
    fetch(`${this.state.isFollow ? 'unfollow':'follow'}/${this.props.follow_id}`)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          this.setState({ isFollow: !this.state.isFollow })
        } else {
          console.log('request faild!',response.statusText)
        }
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
