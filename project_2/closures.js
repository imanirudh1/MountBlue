const closures = {
  counterFactory() {
    let value = 0
    return {
      increment() {
        value++
        return value
      },
      decrement() {
        value--
        return value
      },
    }
  },
  limitFunctionCallCount(cb, n) {
    let times = 0
    return function () {
      if (times === n) return null
      times++
      return cb()
    }
  },
  cacheFunction(cb) {
    let cache = {}
    return function (arg) {
      if (cache[arg]) {
        return cache
      } else {
        cache[arg] = 1
      }
      return cb()
    }
  },
}

module.exports = closures
