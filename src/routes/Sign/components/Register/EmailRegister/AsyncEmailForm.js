import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import renderField from '../../Input//Input'
import Spinner from '../../../../../components/Spinner/Spinner'

import validate from './validate'
import asyncValidate from './asyncValidate'
import submit from './submit'

class EmailRegister extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    error: PropTypes.string,

  }
  render () {
    const { handleSubmit, submitting, error } = this.props
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
  asyncBlurFields: ['username', 'email']
})(EmailRegister)
