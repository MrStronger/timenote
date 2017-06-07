import React from 'react'
import { Field, reduxForm } from 'redux-form'

import './LoginForm.scss'

import Tip from '../../../../components/Tip/Tip'
import Spinner from '../../../../components/Spinner/Spinner'

import validate from './validate'
import submit from './submit'

const renderField = ({
  input,
  label,
  type,
  icon,
  meta: {asyncValidating,  touched, error}
}) => (
  <div className='form-item'>
    <div className={'form-item-input'}>
      <span><i className={'fa fa-'+icon} aria-hidden='true'/></span>
      <input {...input} type={type} placeholder={label} />
    </div>
    {
      error && touched && <div className='form-item-error'>
        <Tip info={error} />
      </div>
    }
  </div>
)


class LoginForm extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        phoneNumber: '',
        passWord: ''
      },
      error:{
        phoneNumber: {
          boolean: false,
          info: ''
        },
        passWord: {
          boolean: false,
          info: ''
        }
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
    //用户输入失去焦点时，检验输入是否合法
    let { name, value } = e.target
    let { error } = this.state
    switch (name) {
      case 'phoneNumber':
        let emailReg = /^([a-zA-Z_0-9-])+@([a-zA-Z_0-9-])+(.[a-zA-Z_0-9-])+$/
        let phoneReg = /^1[34578]\d{9}$/
        var t = emailReg.test(value) || phoneReg.test(value)
        if(value.length == 0){
          error[name] = {
            boolean: true,
            info: '请输入手机号或邮箱'
          }
        }else if(!t){
          error[name] = {
            boolean: true,
            info: '手机号或邮箱格式不对'
          }
        }else{
          error[name] = {
            boolean: false,
            info: ''
          }
        }
        this.setState({
          error: error
        })
        break;
      case 'passWord':
        if(value.length == 0){
          error[name] = {
            boolean: true,
            info: '请输入密码'
          }
          this.setState({
            error: error
          })
        }else{
          error[name] = {
            boolean: false,
            info: ''
          }
        }
        break;
      default:
        break
    }
  }
  handleFocus = (e) => {
    //当用户焦点在输入时，隐藏错误显示
    let { name, value } = e.target
    let { error } = this.state
    error[name].boolean = false
    this.setState({
      error: error
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    let { loginForm, error } = this.state
    if(loginForm.phoneNumber.length == 0){
      error.phoneNumber = {
        boolean: true,
        info: '请输入用户名或邮箱'
      }
      this.setState({
        error: error
      });
      return false
    }else if(error.phoneNumber.info.length > 0){
      return false
    }
    if(loginForm.passWord.length == 0){
      error.passWord = {
        boolean: true,
        info: '请输入密码'
      }
      this.setState({
        error: error
      });
      return false
    }
    this.props.fetchLogin(loginForm)
  }
  componentDidMount() {

  }
  render() {
    //本地验证信息存在组件state,发送请求反馈的信息存放在redux。
    return (
      <div>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <div className='form-item'>
            <div className='form-item-input'>
              <i className='fa fa-user fa-fw' />
              <input onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} name='phoneNumber' type='text' placeholder='手机号/邮箱' value={this.state.loginForm.phoneNumber}/>
            </div>
            {
              this.state.error.phoneNumber.boolean? <div className='form-item-error'>
                <Tip info={this.state.error.phoneNumber.info} />
              </div>
              :
              ''
            }

          </div>
          <div className='form-item'>
            <div className='form-item-input'>
              <i className='fa fa-lock fa-fw' />
              <input onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} name='passWord' type='password' placeholder='密码' value={this.state.loginForm.password}/>
            </div>
            {
              this.state.error.passWord.boolean? <div className='form-item-error'>
                <Tip info={this.state.error.passWord.info} />
              </div>
              :
              ''
            }
          </div>

          <button className='submit' type='submit'>登录</button>
        </form>
      </div>
    );
  }

  */
  render() {
    const {handleSubmit, pristine, reset, submitting, error} = this.props
    return (
      <form className='form' onSubmit={handleSubmit(submit)}>
        <Field
          name='username'
          type='text'
          icon='user'
          component={renderField}
          label='输入你的手机号或邮箱'
        />
        <Field
          name='password'
          type='password'
          icon='lock'
          component={renderField}
          label='输入密码'
        />
        <div>
          {error && <span>{error}</span>}
          <div>
            <button className='submit btn-base' type='submit' disabled={submitting}>登录
            <Spinner show={submitting} text='' color='#683047' /></button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'syncLoginForm',
  validate,
})(LoginForm)
