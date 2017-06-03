import React from 'react'

import { Button } from 'antd'

import { Link } from 'react-router'
import './Sign.scss'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'


class Sign extends React.Component {
  componentDidMount() {
    console.log(this.props);
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
          {this.props.option == 'login'? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    );
  }

}

export default Sign;
