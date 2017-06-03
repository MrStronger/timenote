import React from 'react'
import './LoginForm.scss'



class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        phoneNumber: '',
        passWord: ''
      },
      error:{

      }
    }
  }
  handleChange = (e) => {
    let { name, value } = e.target
    let { loginForm } = this.state
    loginForm[name] = value
    this.setState({
      loginForm:loginForm
    });
  }
  handleBlur = (e) => {
    let { name, value } = e.target

    console.log(e.target);
  }
  handleSubmit = (e) =>{
    e.preventDefault()

  }
  render() {
    return (
      <div>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <div className='form-item'>
            <i className='fa fa-user' />
            <input onChange={this.handleChange} onBlur={this.handleBlur} name='phoneNumber' type='text' placeholder='手机号' value={this.state.loginForm.phoneNumber}/>
          </div>
          <div className='form-item'>
            <i className='fa fa-lock' />
            <input onChange={this.handleChange} onBlur={this.handleBlur} name='passWord' type='password' placeholder='密码' value={this.state.loginForm.password}/>
          </div>
          <button className='submit' type='submit'>登录</button>
        </form>
      </div>
    );
  }

}

export default LoginForm
