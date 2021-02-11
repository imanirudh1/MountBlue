var MyArray = {
  /**
   * The each() function iterate once for each array element.
   *@param {Array} arr - Array of elements
   * @param {function} cb
   */

  each(arr, cb) {
    if (Array.isArray(arr)) {
      for (let index = 0; index < arr.length; index++) {
        cb(arr[index], index, arr)
      }
    } else {
      console.log(arr + ' is not a function')
    }
  },

  /**
   * The map() function iterate once for each array element.
   *@param {Array} arr - Array of elements
   * @param {function} cb
   * @return {Array}
   */

  map(arr, cb) {
    if (Array.isArray(arr)) {
      const newArr = []
      for (let index = 0; index < arr.length; index++) {
        newArr.push(cb(arr[index], index, arr))
      }
      return newArr
    } else {
      console.log(arr + ' is not a function')
    }
  },

  /**
   * The reduce() function iterate each item once resulting in single output value.
   *@param {Array} arr - Array of elements
   * @param {function} cb
   * @param {Number} startingVal - starting number (optional)
   *
   * @return {Number}
   */

  reduce(arr, cb, startingVal) {
    if (Array.isArray(arr)) {
      let index
      if (!startingVal) {
        startingVal = arr[0]
        index = 1
      } else {
        index = 0
      }
      let reducedVal = startingVal
      for (index; index < arr.length; index++) {
        reducedVal = cb(reducedVal, arr[index])
      }
      return reducedVal
    } else {
      console.log('Its not a Array')
    }
  },

  /**
   * The find() function iterate each item once to find the val based on given condition
   *@param {Array} arr - Array of elements
   * @param {function} cb
   *
   * @return {Number}
   */

  find(arr, cb) {
    if (Array.isArray(arr)) {
      for (let index = 0; index < arr.length; index++) {
        if (cb(arr[index], index, arr)) return arr[index]
      }
      return undefined
    } else {
      console.log('Its not a Array')
    }
  },

  /**
   * The filter() creates a new array with all elements that pass the test.
   *@param {Array} arr - Array of elements
   * @param {function} cb
   *
   * @return {Array}
   */

  filter(arr, cb) {
    if (Array.isArray(arr)) {
      const newArr = []
      for (let index = 0; index < arr.length; index++) {
        if (cb(arr[index], index, arr)) newArr.push(arr[index])
      }
      return newArr
    } else {
      console.log('Its not a Array')
    }
  },

  /**
   * The filter() Flattens a nested array.
   *@param {Array} arr - Array of elements
   *
   * @return {Array}
   */

  flatten(arr) {
    if (Array.isArray(arr)) {
      let output = []
      for (let index = 0; index < arr.length; index++) {
        if (Number.isInteger(arr[index])) {
          output.push(arr[index])
        } else {
          let rec = this.flatten(arr[index])
          output.push(...rec)
        }
      }
      return output
    } else {
      console.log('Its not a Array')
    }
  },
}

module.exports = MyArray
