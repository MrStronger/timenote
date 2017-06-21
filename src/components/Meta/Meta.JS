import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Meta extends Component {
  static propTypes = {
    numbers: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    isResponsive: PropTypes.bool
  }
  static defaultProps = {
    icon: '',
    numbers: 0,
    isResponsive: false
  }
  render () {
    let { numbers, icon, isResponsive } = this.props
    return (
      <a className={'icon-set' + (isResponsive ? ' hidden-sm hidden-md' : '')}>
        <i className={'fa fa-' + icon}>{numbers}</i>
      </a>
    )
  }
}

export default Meta
