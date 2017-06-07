

const validate = (values) => {
  const errors = {}
  //用户长度以及密码的验证之后更新
  if(!values.username){
    errors.username = '请输入你的昵称'
  }

  if(!values.password){
    errors.password = '输入密码'
  }
  return errors
}

export default validate
