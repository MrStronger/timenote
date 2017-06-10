const emailReg = /^([a-zA-Z_0-9-])+@([a-zA-Z_0-9-])+(.[a-zA-Z_0-9-])+$/
const validate = (values) => {
  const errors = {}
  if (!values.username) {
    errors.username = '请输入你的昵称'
  }
  if (!values.email) {
    errors.email = '请输入你的邮箱'
  } else if (!emailReg.test(values.email)) {
    errors.email = '邮箱格式不正确'
  }
  if (!values.password) {
    errors.password = '输入密码'
  }
  if (!values.repassword || values.password !== values.repassword) {
    errors.repassword = '两次密码不一致'
  }

  return errors
}

export default validate
