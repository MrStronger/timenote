const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const asyncValidate = (values, dispatch) => {
  debugger
  return sleep(1000).then(() => {
    let test = true
    if (!test) {
      throw { phone: '手机号已经被使用' }
    }
  })
}

export default asyncValidate
