
let baseUrl = `https://easy-mock.com/mock/5947a6428ac26d795f3f8e99/timenote/`
export function ajax (that, url, errPath) {
  fetch(baseUrl + url)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json()
        }
      }).then(data => {
        if (data.status === 200 && data.statusText === 'OK') {
          that.setState({ data: data.data })
        } else {
          console.log('request failed')
        }
      }).catch((err) => console.log(errPath, err))
}
