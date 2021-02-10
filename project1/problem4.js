/**
 * Get all the cars year
 *
 * @param {Object[]} inventory - The details of the cars
 *
 * @return {Array[]}
 */

const problem4 = (inventory) => {
  if (inventory.length === 0 || !Array.isArray(inventory)) return []
  var carYears = []
  for (let i = 0; i < inventory.length; i++) {
    carYears.push(inventory[i].car_year)
  }
  return carYears
}
/**
 * A module to get all the cars year
 * @module ./problem4
 */

module.exports = problem4
