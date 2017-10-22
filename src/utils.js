
export default class Utils {
  static addStyle (el, styles) {
    for (let prop in styles) {
      el.style[prop] = styles[prop]
    }
  }

  static extend (objA, objB) {
    for (let key in objB) {
      objA[key] = objB[key]
    }
    return objA
  }
}
