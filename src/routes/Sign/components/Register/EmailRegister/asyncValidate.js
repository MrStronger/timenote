const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const asyncValidate = (values, dispatch, form) => {

  return sleep(1000).then( () => {
          fetch('http://127.0.0.1:4000/banner')
                .then(response => response.json())
                .then(response => {
                  let test = true
                  if(!test){
                      throw {email: '邮箱已经被使用'}
                  }
            })
          })
}

export default asyncValidate
