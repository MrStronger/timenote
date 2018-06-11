import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import Spinner from '../../../../../components/Spinner/Spinner'
import renderField from '../../Input/Input'

import validate from './validate'
import asyncValidate from './asyncValidate'
import submit from './submit'

class PhoneRegister extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 60,
      start: false
    }
    this.interVal = 0
  }
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    asyncPhoneForm: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    error: PropTypes.string
  }
  requestAuthCode = () => {
    let { dispatch } = this.props
    let { syncErrors } = this.props.asyncPhoneForm
    console.log(this.props.asyncPhoneForm)
    let action = {
      type: '@@redux-form/BLUR',
      meta: {
        form: 'asyncPhoneForm',
        field: 'phone',
        touch: true
      },
      payload: ''
    }
    // 如果用户没有填写手机号，触发blur，显示错误，并return false
    if (syncErrors && syncErrors.phone) {
      dispatch(action)
      return false
    }
    // 当用户点击之后，查看state的start，如果已经点击过，则return false
    let { start } = this.state
    if (start) return false
    if (!this.state.start) {
      this.setState({
        start: true
      })
      this.interVal = setInterval(() => {
        var count = this.state.count
        count--
        if (count <= 1) {
          this.setState({
            start: false
          })
          count = 60
          clearInterval(this.interVal)
        }
        this.setState({
          count: count
        })
      }, 1000)
    }
    // 取出手机号，给用户发送验证码
    // let { phone } = this.props.asyncPhoneForm.values
  }
  componentWillUnmount () {
    clearInterval(this.interVal)
  }
  render () {
    const { handleSubmit, submitting, error } = this.props
    /* let text = this.state.start ? '重新发送(' + this.state.count + ')' : '发送验证码'
    const verify = {
      requestAuthCode: this.requestAuthCode,
      text: text
    } */
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
          async
        />
        <Field
          name='email'
          type='email'
          icon='envelope'
          component={renderField}
          label='输入你的邮箱'
          async
          
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
            <Spinner show={submitting} text='' color='#683047' size={14} /></button>
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
