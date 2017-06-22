import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserMsg from './UserMsg'
import ArticleToggle from '../../../components/ArticleToggle/ArticleToggle'
import ArticleContainer from '../../../containers/ArticleContainer'

export default class UserPage extends Component {
  static propTypes = {
    user_id: PropTypes.string.isRequired,
    currentToggle: PropTypes.string.isRequired,
    changeToggle: PropTypes.func.isRequired
  }
  render () {
    const { user_id, currentToggle, changeToggle, params } = this.props
    return (
      <div className='container' style={{ marginTop: 25 + 'px' }}>
        <div className='row'>
          <div className='col-sm-4 col-md-3 col-md-offset-1'>
            <UserMsg user_id={params.userId} mainUserId={user_id} />
          </div>
          <div className='col-sm-9 col-md-8'>
            <ArticleToggle sign={true} changeToggle={changeToggle} />
            <ArticleContainer user_id={params.userId} toggleState={currentToggle} />
          </div>
        </div>
      </div>
    )
  }
}
