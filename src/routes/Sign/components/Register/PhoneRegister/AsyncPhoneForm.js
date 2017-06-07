import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Tip from '../../../../../components/Tip/Tip'
import Spinner from '../../../../../components/Spinner/Spinner'
import InterVal from '../../../components/InterVal/InterVal'

import validate from './validate'
import asyncValidate from './asyncValidate'
import submit from './submit'

const renderField = ({
  input,
  label,
  type,
  icon,
  async,
  meta: {asyncValidating,  touched, error}
}) => (
  <div className='form-item'>
    <div className={'form-item-input'}>
      <span><i className={'fa fa-'+icon} aria-hidden='true'/></span>
      <input {...input} type={type} placeholder={label} />
      {
        async ?<div className='loading'>
                <Spinner show={asyncValidating} text='' color='#683047' />
              </div>
                :
                ''
      }
    </div>
    {
      error && touched && <div className='form-item-error'>
        <Tip info={error} />
      </div>
    }
  </div>
)

const renderCodeField = ({
  input,
  label,
  type,
  icon,
  async,
  request_auth_code,
  text,
  meta: {asyncValidating,  touched, error}
}) => (
  <div className='form-item'>
    <div className={'form-item-input'}>
      <span><i className={'fa fa-'+icon} aria-hidden='true'/></span>
      <input {...input} type={type} placeholder={label} style={{width: '50%'}}/>
      <button className='btn-sm btn-base' type='button' onClick={request_auth_code}>
        {text}
      </button>
    </div>
    {
      error && touched && <div className='form-item-error'>
        <Tip info={error} />
      </div>
    }
  </div>
)

function test (values, dispatch) {
  console.log(dispatch);
}

class PhoneRegister extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nickName: {
          isEdit: false,
          value: ''
        },
        phone: {
          isEdit: false,
          value: ''
        },
        code: {
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
        phone: {
          boolean: false,
          info: '',
          normal: '请输入你的手机号'
        },
        code: {
          boolean: false,
          info: '',
          normal: '请输入验证码'
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
      },
      code: {
        isfetched: false,
        count: 60
      }
    }
  }

  handleChange = (e) => {
    let { name, value} = e.target
    let { error, form } = this.state
    form[name] = {
      isEdit: true,
      value: value
    }
    this.setState({
      form: form
    })
    if(name == 'repassword' || name == 'password'){
      let { password, repassword } = form
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
    let { error, form } = this.state
    console.log(form);
    if(form[name].isEdit){
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
        case 'phone':
          let phoneReg = /^1[34578]\d{9}$/
          if(value.length == 0){
            error[name] = {
              boolean: true,
              info: '请输入手机号或邮箱'
            }
          }else if(!phoneReg.test(value)){
            error[name] = {
              boolean: true,
              info: '手机号格式不对'
            }
          }else{
            error[name] = {
              boolean: false,
              info: ''
            }
          }
          break;
        case 'code':
          if(value.length == 0){
            error[name] = {
              boolean: true,
              info: '请输入验证码'
            }
          }else{
            error[name] = {
              boolean: false,
              info: ''
            }
          }
          break;
        case 'password':
          if(value.length == 0){
            error[name] = {
              boolean: false,
              info: '请输入密码'
            }
          }else{
            error[name] = {
              boolean: false,
              info: ''
            }
          }
          break;
        case 'repassword':
          let { password, repassword} = form
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
    let { name, value } = e.target
    let { error } = this.state
    if(name != 'repassword'){
      error[name].boolean = false
      this.setState({
        error: error
      })
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let { form, error} = this.state
    var isFalse = this.check(form, error)
    if(isFalse){
      if(typeof isFalse == 'string'){
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
  request_auth_code = (e) => {
    let { error, code } = this.state
    if(error.phone.boolean || code.isfetched ){
      return false
    }else{
      //发送请求
    }
    //设置60s倒计时

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
              <span><i className="fa fa-user " /></span>
              <input onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} name='nickName' type='text'  placeholder='输入你的昵称' />
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
              <span><i className="fa fa-mobile fa-lg " /></span>
              <input onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} name='phone' type='text'  placeholder='输入你的手机号' />
            </div>
            {
              this.state.error.phone.boolean? <div className='form-item-error'>
                <Tip info={this.state.error.phone.info} />
              </div>
              :
              ''
            }
          </div>
          <div className='form-item'>
            <div className='form-item-input'>
              <span><i className="fa fa-shield" /></span>
              <input onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} name='code' type='text'  placeholder='验证码' style={{width: 100}} />
              <button className='btn-sm btn-base' type='button' onClick={this.request_auth_code}>
                发送验证码
              </button>
            </div>
            {
              this.state.error.code.boolean? <div className='form-item-error'>
                <Tip info={this.state.error.code.info} />
              </div>
              :
              ''
            }
          </div>
          <div className='form-item'>
            <div className='form-item-input'>
              <span><i className="fa fa-lock " /></span>
              <input onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} name='password' type='password'  placeholder='输入密码'/>
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
              <span><i className="fa fa-lock " /></span>
              <input onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} name='repassword' type='password'  placeholder='确认密码'/>
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
  constructor(props) {
    super(props);
    this.state = {
      count: 60,
      start: false
    }
  }
  request_auth_code = () => {
    let { dispatch } = this.props
    let { syncErrors } = this.props.asyncPhoneForm
    console.log(this.props.asyncPhoneForm);
    let action = {
      type: '@@redux-form/BLUR',
      meta: {
        form: 'asyncPhoneForm',
        field: 'phone',
        touch: true
      },
      payload: ''
    }
    //如果用户没有填写手机号，触发blur，显示错误，并return false
    if(syncErrors.phone){
      dispatch(action)
      return false
    }
    //当用户点击之后，查看state的start，如果已经点击过，则return false
    let { start } = this.state
    if(start) return false
    if(!this.state.start){
      this.setState({
        start: true
      })
      let timer = setInterval( () => {
        var count = this.state.count
        count--
        if(count <= 1){
          this.setState({
            start: false
          })
          count = 60
          clearInterval(timer)
        }
        this.setState({
          count: count
        })
      }, 1000)
    }
    //取出手机号，给用户发送验证码
    //let { phone } = this.props.asyncPhoneForm.values
  }
  render() {
    const {handleSubmit, pristine, reset, submitting, error} = this.props
    let text = this.state.start? '重新发送('+this.state.count+')' : '发送验证码'
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
          name='phone'
          type='text'
          icon='mobile fa-lg'
          component={renderField}
          label='输入你的手机号'
          async={true}
        />
        <Field
            name='code'
            type='text'
            icon='shield'
            request_auth_code={this.request_auth_code}
            text={text}
            component={renderCodeField}
            label='验证码'
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
          <InterVal />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'asyncPhoneForm',
  validate,
  asyncValidate,
  asyncBlurFields: ['phone']
})(PhoneRegister)
