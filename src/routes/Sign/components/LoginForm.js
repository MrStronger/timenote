import React from 'react'

import { Form, Icon, Input, Button} from 'antd'
const FormItem = Form.Item


class LoginForm extends React.Component {
  handleChange(values){
    console.log(values);
  }
  handleSubmit = (e) =>{
    e.preventDefault()
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('phone number', {
            rules: [
              { required: true, message: 'Please input your phone number!' },
              ],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Phone" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <Button type='primary' htmlType='submit'>
          登录
        </Button>
      </Form>
    );
  }

}

export default Form.create()(LoginForm);
