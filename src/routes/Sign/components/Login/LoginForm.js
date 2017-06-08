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
