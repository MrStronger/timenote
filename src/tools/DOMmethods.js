
export function siblings (obj) {
  let siblingElement = []
  let parentAllElement = []
  if (!obj.parentNode) {
    return siblingElement
  }
  parentAllElement = obj.parentNode.getElementsByTagName(obj.tagName)
  for (let i = 0; i < parentAllElement.length; i++) {
    if (parentAllElement[i] !== obj) {
      siblingElement.push(parentAllElement[i])
    }
  }
  return siblingElement
}

export function removeClass (obj, cls) {
  if (obj.classList.contains(cls)) {
    let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    obj.className = obj.className.replace(reg, ' ')
    obj.className = obj.className.replace(/\s+/g, ' ')
  }
}
