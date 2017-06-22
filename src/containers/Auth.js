import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }
    componentWillMount () {
      if (!this.props.auth) {
        this.context.router.push('/sign')
      }
    }
    componentWillUpdate (nextProps, nextState) {
      if (!nextProps.auth) {
        this.context.router.push('/sign')
      }
    }
    render () {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  function mapStateToProps (state) {
    return {
      auth: state.auth.isAuth
    }
  }
  return connect(mapStateToProps)(Authentication)
}
