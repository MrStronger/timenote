export function unique (array) {
  var hash = {}
  var newArr = array.reduce((item, next) => {
    hash[next.id] ? '' : hash[next.id] = true && item.push(next)
    return item
  }, [])
  return newArr
}

export function sortBy (array, taget) {
  var tempObj = {}
  for (var outer = array.length; outer >= 2; --outer) {
    for (var inner = 0; inner <= outer - 2; inner++) {
      if (array[inner][taget] < array[inner + 1][taget]) {
        tempObj = array[inner][taget]
        array[inner][taget] = array[inner + 1][taget]
        array[inner + 1][taget] = tempObj
      }
    }
  }
  return array
}
