<<<<<<< HEAD
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Gif from './Gif'

let style = require('style-loader!css-loader!./style.css')

class Spinner extends Component {
  constructor (props) {
    super(props)
  }

=======
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
>>>>>>> 6f74f2c9a56e86a9ecc5fbeb8af9778c3b6af9fd
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
<<<<<<< HEAD
        <svg width='1em' height='1em' ><circle style={{ stroke:this.props.color }} cx='0.5em' cy='0.5em' r='0.45em' /></svg>
      </div>
    )
    if (this.props.type != 'svg') {
=======
        <svg width='1em' height='1em' >
          <circle style={{ stroke: this.props.color }} cx='0.5em' cy='0.5em' r='0.45em' />
        </svg>
      </div>
    )
    if (this.props.type !== 'svg') {
>>>>>>> 6f74f2c9a56e86a9ecc5fbeb8af9778c3b6af9fd
      loading = <Gif size={this.props.size} />
    }

    if (this.props.children) {
      loading = this.props.children
    }
    // 返回行内的加载内容
<<<<<<< HEAD
    if (this.props.display == 'inline') {
=======
    if (this.props.display === 'inline') {
>>>>>>> 6f74f2c9a56e86a9ecc5fbeb8af9778c3b6af9fd
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
<<<<<<< HEAD

Spinner.propTypes = {
  type: PropTypes.string,
  display: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
  cls: PropTypes.string,
  show: PropTypes.bool,
}

Spinner.defaultProps = {
  type: 'svg',
  style: {},
  color: '#9b59b6',
  text: '加载中...',
  cls: '',
  show: false,
}

export default Spinner
=======
>>>>>>> 6f74f2c9a56e86a9ecc5fbeb8af9778c3b6af9fd
