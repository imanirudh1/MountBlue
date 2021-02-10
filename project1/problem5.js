/**
 * Get all the cars below year 2000
 *
 * @param {Array[]} carYears - list of all the years
 *
 * @return {Number}
 */
const problem5 = (carYears) => {
  if (carYears.length === 0 || !Array.isArray(carYears)) return []
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
/**
 * A module to get list of car below year 2000 and Length of the list
 * @module ./problem5
 */

module.exports = problem5
