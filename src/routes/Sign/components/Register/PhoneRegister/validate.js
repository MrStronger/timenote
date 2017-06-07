const phoneReg = /^1[34578]\d{9}$/

const validate = (values) => {
  const errors = {}
  if(!values.username){
    errors.username = '请输入你的昵称'
  }
  if(!values.phone){
    errors.phone = '请输入你的手机号'
  }else if(!phoneReg.test(values.phone)){
    errors.phone = '手机号格式不对'
  }
  if(!values.code){
    errors.code = '请输入验证码'
  }
  if(!values.password){
    errors.password = '输入密码'
  }
  if(!values.repassword || values.password !== values.repassword){
    errors.repassword = '两次密码不一致'
  }
  return errors
}

export default validate
