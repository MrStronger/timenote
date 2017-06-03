import React from 'react'




class LoginForm extends React.Component {
  handleChange(values){
    console.log(values);
  }
  handleSubmit = (e) =>{
    e.preventDefault()
  }
  render() {
    return (
      <div>
        登录
      </div>
    );
  }

}

export default LoginForm
