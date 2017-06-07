import React from 'react'


import { Link } from 'react-router'
import './Sign.scss'

import Login from '../containers/LoginContainer'
import Register from '../containers/RegisterContainer'


class Sign extends React.Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <div className='sign'>
        <div className='logo'>
          <img src="http://realtcg.com/TimeNote/assets/images/logo.png" />
        </div>
        <ul className='menu'>
          <li className={this.props.option == 'login'? 'active': ''} onClick={() => this.props.change_to_login('login')}>登录</li>
          <li>.</li>
          <li className={this.props.option == 'register'? 'active': ''} onClick={() => this.props.change_to_register('register')}>注册</li>
        </ul>
        <div className='main'>
          {this.props.option == 'login'? <Login /> : <Register />}
        </div>
      </div>
    );
  }

}

export default Sign;
