import React from 'react'
import PropTypes from 'prop-types'
import Gif from './Gif'
import './style.scss'

export default class Spinner extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    show: PropTypes.bool,
    style: PropTypes.object,
    display: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    children: PropTypes.object,
    text: PropTypes.string
  }
  static defaultProps = {
    type: 'svg',
    style: {},
    color: '#9b59b6',
    size: 14,
    show: false
  }
  render () {
    if (!this.props.show) {
      return <span />
    }
    const size = this.props.size
    let ste = this.props.style
    if (size > 0) {
      ste.fontSize = size
    }
    let loading = (
      <div className='svg-loader' style={ste}>
        <svg width='1em' height='1em' >
          <circle style={{ stroke: this.props.color }} cx='0.5em' cy='0.5em' r='0.45em' />
        </svg>
      </div>
    )
    if (this.props.type !== 'svg') {
      loading = <Gif size={this.props.size} />
    }

    if (this.props.children) {
      loading = this.props.children
    }
    // 返回行内的加载内容
    if (this.props.display === 'inline') {
      return loading
    }

    return (
      <div className='react-loading-spinner' >
        <div className='loading-inner'>
          {loading}
          <div className='alert-text'>{this.props.text}</div>
        </div>
      </div>
    )
  }
}
