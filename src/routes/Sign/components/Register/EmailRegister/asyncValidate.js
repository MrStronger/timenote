const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const asyncValidate = (values, dispatch, form) => {
  console.log(form);
  return sleep(1000).then( () => {
        let test = true
          if(!test){
            throw {email: ' 邮箱号已经被使用'}
          }
        })
}

export default asyncValidate
