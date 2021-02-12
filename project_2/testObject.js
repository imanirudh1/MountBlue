const object = require('./object')

const obj = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }
// Keys

const keyArr = object.keys(obj)
console.log(keyArr)

// Values

// const valArr = object.values(obj)
// console.log(valArr)

// mapObject

// const mapObj = object.mapObject({ start: 5, end: 12 }, function (val) {
//   return val + 5
// })
// console.log(mapObj)

// Pairs

// const pair = object.pairs(obj)
// console.log(pair)

// Invert

// const invertObj = object.invert(obj)
// console.log(invertObj)

// Defaults

// const defaultObj = object.defaults(
//   { flavor: 'chocolate' },
//   { flavor: 'vanilla', sprinkles: 'lots' }
// )
// console.log(defaultObj)
