import React from 'react';
import { Form, Icon, Input, Button } from 'antd'
import './RegisterForm.scss'

const FormItem = Form.Item

class RegisterForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    let { getFieldDecorator } = this.props.form
    return (
      <div className='register'>
        <Form
          onSubmit={this.handleSubmit}
          >
          <FormItem
            >
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: '输入你的昵称'}
              ]
            })(
              <Input prefix={<Icon type='user' style={{ fontSize: 13 }} />} placeholder='你的昵称' />
            )}
          </FormItem>
          <FormItem
            >
            {getFieldDecorator('phone', {
              rules: [
                {required: true, message: '输入手机号'},
                {len: 11, message: '手机号不合法'}
              ]
            })(
              <Input prefix={<Icon type="mobile" style={{ fontSize: 13 }} />} placeholder='手机号'/>
            )}
          </FormItem>
          <FormItem
            >
            {getFieldDecorator('code', {
              rules: [
                {required: true, message: '输入验证码'},
                {len: 4, message: '验证码错误'}
              ]
            })(
              <Input prefix={<Icon type="safety" style={{ fontSize: 13 }} />} placeholder='手机验证码'/>
            )}
            <Button  size='small' className='btn-sm'>发送验证码</Button>
          </FormItem>
          <Button size='large' htmlType='submit'>注册</Button>
        </Form>
      </div>
    );
  }

}

export default Form.create()(RegisterForm);
