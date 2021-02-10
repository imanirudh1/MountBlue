/**
 * Find the details of the Car
 *
 * @param {Object[]} inventory - The details of the cars
 *
 * @also
 *
 * @param {Number} carId - Id No. to get that cars details
 * @return {string}
 */

const problem1 = (inventory = [], carId) => {
  if (!carId || !Array.isArray(inventory)) return []
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === carId) {
      return [inventory[i]]
    }
  }
  return []
}

/**
 * A module to gets a car details!
 * @module ./problem1
 */

module.exports = problem1
