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
