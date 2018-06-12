// 防抖
export function debounce (fun, delay) {
  var timer = null
  return function (context) {
    clearTimeout(timer)
    var args = Array.prototype.slice.call(arguments, 1)
    timer = setTimeout(function () {
      fun.apply(context, args)
    }, delay)
  }
}


export function throttle (fun, delay) {
  let timeout = null
  let lastRun = Date.now()
  return function (context) {
    if (timeout) {
        return
    }
    let elapsed = Date.now() - lastRun
    let args = Array.prototype.slice.call(arguments, 1)
    let runCallback = function () {
      lastRun = Date.now()
      timeout = false
      fun.apply(context, args)
    }
    if (elapsed >= delay) {
      debugger
      runCallback()
    } else {
      timeout = setTimeout(runCallback, delay)
    }
  }
}