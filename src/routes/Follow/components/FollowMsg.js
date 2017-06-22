import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import FollowToggle from '../../../components/FollowToggle/FollowToggle'
import { ajax } from '../../../tools/Ajax'
import './styles/FollowMsg.scss'

export default class FollowMsg extends Component {
  state = {
    data: {
      id: '',
      isFollow: false
    }
  }
  static propTypes = {
    follow_id: PropTypes.string.isRequired
  }
  getData (props) {
    ajax(this, `follow/msg/${props.follow_id}`, 'src/routes/Follow/components/FollowMsg.js')
  }
  componentWillMount () {
    this.getData(this.props)
  }
  componentWillReceiveProps (nextProps) {
    this.getData(nextProps)
  }
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.follow_id !== nextProps.follow_id || nextState.data.id !== this.state.data.id
  }
  render () {
    const data = this.state.data
    return (
      <div className='note-top relative clearfix'>
        <Link to={'/u/'+data.id} className='avatar left'><img src={data.img} alt={data.name} /></Link>
        <FollowToggle follow_id={data.id} isFollow={data.isFollow} />
        <Link to={'/u/'+data.id} className='atr-option absolute'>个人主页</Link>
        <Link to={'/u/'+data.id} className='name'>{data.name}</Link>
        <p className='data'>
          <a className='icon-set'><i className='fa fa-pencil' />{data.writeNum}</a>
          <a className='icon-set'><i className='fa fa-eye' />{data.follow}</a>
          <a className='icon-set'><i className='fa fa-thumbs-up' />{data.like}</a>
        </p>
      </div>
    )
  }
}
