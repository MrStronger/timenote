import React from 'react'
import PropTypes from 'prop-types'

import Tip from '../../../../components/Tip/Tip'
import Spinner from '../../../../components/Spinner/Spinner'

const renderField = ({
    input,
    label,
    type,
    icon,
    async,
    verify,
    meta: { asyncValidating, touched, error }
}) => (
  <div className='form-item'>
    <div className={'form-item-input'}>
      <span><i className={'fa fa-' + icon} aria-hidden='true' style={{ fontSize: type === 'email' ? 12 : '' }} /></span>
      <input {...input} type={type} placeholder={label} />
      {
        async ? <div className='loading'>
          <Spinner show={asyncValidating} text='' color='#683047' />
        </div>
              : ''
      }
      {
        verify ? <button className='btn-sm btn-base' type='button' onClick={verify.requestAuthCode}>{verify.text}</button> : ''
      }
    </div>
    {
       error && touched && <div className='form-item-error'><Tip info={error} /></div>
    }
  </div>
)

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  async: PropTypes.bool.isRequired,
  verify: PropTypes.object,
  meta: PropTypes.object.isRequired
}

renderField.defaultProps = {
  async: false,
}

export default renderField
