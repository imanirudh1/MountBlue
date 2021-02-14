const closure = require('./closures')

// const counter = closure.counterFactory()
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.decrement())

// const limit = closure.limitFunctionCallCount(() => {
//   return 'done'
// }, 5)
// console.log(limit())
// console.log(limit())
// console.log(limit())
// console.log(limit())
// console.log(limit())
// console.log(limit())
// console.log(limit())
// console.log(limit())

const cacheFunc = closure.cacheFunction(() => 'i will invoke')
console.log(cacheFunc('ab'))
console.log(cacheFunc('abc'))
console.log(cacheFunc('abc'))
console.log(cacheFunc('abcd'))
