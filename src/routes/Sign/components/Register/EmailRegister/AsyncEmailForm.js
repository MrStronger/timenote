import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Tip from '../../../../../components/Tip/Tip'
import Spinner from '../../../../../components/Spinner/Spinner'

import validate from './validate'
import asyncValidate from './asyncValidate'
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
      <span><i className={'fa fa-'+icon} style={{fontSize: type == 'email'? 12 : '' }} aria-hidden='true'/></span>
      <input {...input} type={type} placeholder={label} />
      <div className='loading'>
        <Spinner show={asyncValidating} text='' color='#683047' />
      </div>
    </div>
    {
      error && touched && <div className='form-item-error'>
        <Tip info={error} />
      </div>
    }
  </div>
)

class EmailRegister extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      registerForm: {
        nickName: {
          isEdit: false,
          value: ''
        },
        email: {
          isEdit: false,
          value: ''
        },
        password: {
          isEdit: false,
          value: ''
        },
        repassword: {
          isEdit: false,
          value: ''
        }
      },
      error: {
        nickName: {
          boolean: false,
          info: '',
          normal: '请输入你的昵称'
        },
        email: {
          boolean: false,
          info: '',
          normal: '请输入邮箱'
        },
        password: {
          boolean: false,
          info: '',
          normal: '请输入密码'
        },
        repassword: {
          boolean: false,
          info: '',
          normal: '两次密码不一致'
        }
      }
    }
  }
  componentDidMount() {

  }
  handleChange = (e) => {
    let { name, value} = e.target
    let { error, registerForm } = this.state
    registerForm[name] = {
      isEdit: true,
      value: value
    }
    this.setState({
      registerForm: registerForm
    })
    if(name == 'repassword' || name == 'password'){
      let { password, repassword } = registerForm
      if(password.value !== repassword.value && repassword.isEdit){
        error['repassword'] = {
          boolean: true,
          info: '两次密码不一致',
          normal: error['repassword'].normal
        }
      } else{
        error['repassword'] = {
          boolean: false,
          info: '',
          normal: error['repassword'].normal
        }
        this.setState({
          error: error
        });
      }
    }
  }
  handleBlur = (e) => {
    let { name, value } = e.target
    let { error, registerForm } = this.state
    if(registerForm[name].isEdit){
      switch (name) {
        case 'nickName':
          if(value.length == 0){
            error[name] = {
              boolean: true,
              info: '请输入你的昵称',
            }
          }else{
            error[name] = {
              boolean: false,
              info: '',
            }
          }
          break;
        case 'email':
          let emailReg = /^([a-zA-Z_0-9-])+@([a-zA-Z_0-9-])+(.[a-zA-Z_0-9-])+$/
          if(value.length == 0){
            error[name] = {
              boolean: true,
              info: '请输入邮箱',
            }
          }else if(!emailReg.test(value)){
            error[name] = {
              boolean: true,
              info: '邮箱格式不对',
            }
          }else{
            error[name] = {
              boolean: false,
              info: '',
            }
          }
          break;
        case 'password':
          if(value.length == 0){
            error[name] = {
              boolean: true,
              info: '请输入密码',
            }
          }else{
            error[name] = {
              boolean: false,
              info: '',
            }
          }
          break;
        case 'repassword':
          let { password, repassword } = registerForm
          if(password.value !== repassword.value){
            error[name] = {
              boolean: true,
              info: '两次密码不一致',
            }
          } else{
            error[name] = {
              boolean: false,
              info: '',
            }
          }
          break;
        default:
          break;
      }
      this.setState({
        error: error
      })
    }
  }
  handleFocus = (e) => {
    //当用户焦点在输入框时，隐藏错误提示
    let { name, value } = e.target
    let { error } = this.state
    if(name != 'repassword'){
      error[name].boolean = false
      this.setState({
        error: error
      })
    }
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    let { registerForm, error} = this.state
    var isFalse = this.check(registerForm, error)
    if(isFalse){
      if(typeof isFalse == 'string'){
        console.log(error[isFalse].normal);
          error[isFalse] = { ...error[isFalse],
            boolean: true,
            info: error[isFalse].normal
          }
        }
        this.setState({
          error: error
        })
      return false
    }
    console.log('可以请求了');
  }
  check(form, error){
    for(let item in error){
      if(error[item].boolean){
        return error[item]
      }
    }
    //防止用户一开就点击注册
    for(let item in form){
      if(!form[item].isEdit){
        return item
      }
    }
  }
  render() {
    return (
        <form className='form' onSubmit={this.handleSubmit}>
          <div className='form-item'>
            <div className='form-item-input'>
              <span><i className="fa fa-user" /></span>
              <input onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} name='nickName' type='text'  placeholder='输入你的昵称' value={this.state.registerForm.nickName.value}/>
            </div>
            {
              this.state.error.nickName.boolean? <div className='form-item-error'>
                <Tip info={this.state.error.nickName.info} />
              </div>
              :
              ''
            }
          </div>
          <div className='form-item'>
            <div className='form-item-input'>
              <span><i className="fa fa-envelope" style={{fontSize: 12}} /></span>
              <input onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} name='email' type='text'  placeholder='输入你的邮箱' value={this.state.registerForm.email.value}/>
            </div>
            {
              this.state.error.email.boolean? <div className='form-item-error'>
                <Tip info={this.state.error.email.info} />
              </div>
              :
              ''
            }
          </div>
          <div className='form-item'>
            <div className='form-item-input'>
              <span><i className="fa fa-lock" /></span>
              <input onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} name='password' type='password'  placeholder='输入密码' value={this.state.registerForm.password.value}/>
            </div>
            {
              this.state.error.password.boolean? <div className='form-item-error'>
                <Tip info={this.state.error.password.info} />
              </div>
              :
              ''
            }
          </div>
          <div className='form-item'>
            <div className='form-item-input'>
              <span><i className="fa fa-lock" /></span>
              <input onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} name='repassword' type='password'  placeholder='确认密码' value={this.state.registerForm.repassword.value}/>
            </div>
            {
              this.state.error.repassword.boolean? <div className='form-item-error'>
                <Tip info={this.state.error.repassword.info} />
              </div>
              :
              ''
            }
          </div>
          <button className='submit btn-base' type='submit'>注册</button>
        </form>
    );
  }
  */
  render(){
    const {handleSubmit, pristine, reset, submitting, error} = this.props
    
    return (
      <form className='form' onSubmit={handleSubmit(submit)}>
        <Field
          name='username'
          type='text'
          icon='user'
          component={renderField}
          label='输入你的昵称'
        />
        <Field
          name='email'
          type='email'
          icon='envelope'
          component={renderField}
          label='输入你的邮箱'
        />
        <Field
          name='password'
          type='password'
          icon='lock'
          component={renderField}
          label='输入密码'
        />
        <Field
          name='repassword'
          type='password'
          icon='lock'
          component={renderField}
          label='确认密码'
        />
        <div>
          {error && <span>{error}</span>}
          <div>
            <button className='submit btn-base' type='submit' disabled={submitting}>注册
            <Spinner show={submitting} text='' color='#683047' /></button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'asyncEmailForm',
  validate,
  asyncValidate,
  asyncBlurFields: ['email']
})(EmailRegister);
