import React from 'react'
import PropTypes from 'prop-types'

import './RegisterForm.scss'

import EmailRegister from './EmailRegister/AsyncEmailForm'
import PhoneRegister from './PhoneRegister/AsyncPhoneForm'

class RegisterForm extends React.Component {
  static propTypes = {
    option: PropTypes.string.isRequired,
    optionToRegister: PropTypes.func.isRequired,
    asyncPhoneForm: PropTypes.object,
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }
  componentDidMount () {

  }
  handleClick (option) {
    this.props.optionToRegister(option)
  }
  render () {
    let { option } = this.props
    let data = [
      { key: 'email', value: '邮箱注册' },
      { key: 'phone', value: '手机号注册' }
    ]
    let options = data.map(item => {
      return option === item.key ? '' : <li key={item.key} onClick={() => this.handleClick(item.key)}>
        {item.value}
      </li>
    })
    return (
      <div className='register'>
        {
          this.props.option === 'phone' ? <PhoneRegister asyncPhoneForm={this.props.asyncPhoneForm} /> : <EmailRegister />
        }
        <div className='option'>
          <div>其他注册方式</div>
          <ul>
            {options}
          </ul>
        </div>
      </div>
    )
  }
}

export default RegisterForm
