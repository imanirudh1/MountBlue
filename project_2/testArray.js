const array = require('./array')

// ForEach

array.each([1, 2, 3, 4, 5, 5], iterateItem)
function iterateItem(item, index) {
  console.log(index, item)
}

//Map

// const newArr = array.map([1, 2, 3, 4, 5, 5], (el) => el * 2)
// console.log(newArr)

//Reduce

// const sum = array.reduce([1, 2, 3, 4, 5, 5], (el, cur) => el + cur, 0)
// console.log(sum)

//Find

// const findVal = array.find([1, 2, 3, 4, 5, 5], (el) => el > 2)
// console.log(findVal)

//Filter

// const filterArr = array.filter([1, 2, 3, 4, 5, 5], (el) => el > 3)
// console.log(filterArr)

//Flatten

// const flattenArr = array.flatten([1, [2], [3, [[4]]]])
// console.log(flattenArr)
