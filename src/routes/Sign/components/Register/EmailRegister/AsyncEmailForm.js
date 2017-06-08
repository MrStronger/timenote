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
          async={true}
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
  asyncBlurFields: ['username','email']
})(EmailRegister);
