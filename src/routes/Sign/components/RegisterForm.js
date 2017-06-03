import React from 'react';

import './RegisterForm.scss'


class RegisterForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {

    return (
      <div className='register'>
        注册
      </div>
    );
  }

}

export default RegisterForm
