const problem5 = (carYears) => {
  carYears.sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < carYears.length; i++) {
    if (carYears[i] < 2000) {
      count++
    } else {
      break
    }
  }
  return carYears.slice(0, count)
}

module.exports = problem5
