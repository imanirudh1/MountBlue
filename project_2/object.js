var MyObject = {
  /**
   * Returns all the keys of the object
   *@param {Object} obj - Object
   *
   * @return {Array}
   */

  keys(obj) {
    const res = []
    if (typeof obj === 'object' || typeof obj === 'string') {
      for (let key in obj) {
        res.push(key)
      }
    }
    return res
  },

  /**
   * Returns all the values of the object
   *@param {Object} obj - Object
   *
   * @return {Array}
   */

  values(obj) {
    const res = []
    if (typeof obj === 'object' || typeof obj === 'string') {
      for (let key in obj) {
        if (typeof obj[key] != 'function') res.push(obj[key])
      }
    }
    return res
  },

  /**
   * Transforms value of each property
   *@param {Object} obj - Object
   *
   * @return {Object}
   */

  mapObject(obj, cb) {
    const res = {}
    if (typeof obj === 'object') {
      for (let key in obj) {
        res[key] = cb(obj[key], key)
      }
    }
    return res
  },

  /**
   * Returns a key value pair 2D array
   *@param {Object} obj - Object
   *
   * @return {Array}
   */

  pairs(obj) {
    const res = []
    if (typeof obj === 'object') {
      for (let key in obj) {
        res.push([key, obj[key]])
      }
    }
    return res
  },

  /**
   * Inverts the key value pair and returns the object
   *@param {Object} obj - Object
   *
   * @return {Object}
   */

  invert(obj) {
    const res = {}
    if (typeof obj === 'object') {
      for (let key in obj) {
        res[obj[key]] = key
      }
    }
    return res
  },

  /**
   * Assign default value to undefined properties.
   *@param {Object} obj - Object
   *@param {Object} defaultProps - Default properties of the Object
   *
   * @return {Object}
   */

  defaults(obj, defaultProps) {
    const newObj = {}
    if (typeof obj === 'object' && typeof defaultProps === 'object') {
      for (let key in obj) {
        newObj[key] = obj[key]
      }
      for (let key in defaultProps) {
        if (!obj[key]) {
          newObj[key] = defaultProps[key]
        }
      }
    }
    return newObj
  },
}

module.exports = MyObject
