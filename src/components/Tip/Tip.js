import React from 'react'
import PropTypes from 'prop-types'
import './Tip.scss'

class Tip extends React.Component {
  static propTypes = {
    info: PropTypes.string.isRequired
  }
  render () {
    return (
      <span className='tip'>
        <i className='fa fa-exclamation-triangle' />
        {this.props.info}
      </span>
    )
  }
}

export default Tip
