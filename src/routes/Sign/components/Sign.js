import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import './Sign.scss'
import LogoImg from '../../../components/Header/assets/logo.png'

import Login from '../containers/LoginContainer'
import Register from '../containers/RegisterContainer'

class Sign extends React.Component {
  static propTypes = {
    option: PropTypes.string.isRequired,
    changeToLogin: PropTypes.func.isRequired,
    changeToRegister: PropTypes.func.isRequired
  }
  componentDidMount () {
  }
  render () {
    return (
      <div className='sign'>
        <div className='logo'>
          <Link to='/'><img src={LogoImg} /></Link>
        </div>
        <ul className='menu'>
          <li className={this.props.option === 'login' ? 'active' : ''} onClick={() => this.props.changeToLogin('login')}>登录</li>
          <li>.</li>
          <li className={this.props.option === 'register' ? 'active' : ''} onClick={() => this.props.changeToRegister('register')}>注册</li>
        </ul>
        <div className='main'>
          {this.props.option === 'login' ? <Login /> : <Register />}
        </div>
      </div>
    )
  }
}

export default Sign
