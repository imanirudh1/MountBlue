/**
 * Get all the Audi and BMW from the inventory
 *
 * @param {Object[]} inventory - The details of the cars
 *
 * @returns {jQuery}
 */
const problem6 = (inventory) => {
  if (inventory.length === 0 || !Array.isArray(inventory)) return []
  const cars = []
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].car_make === 'Audi' || inventory[i].car_make === 'BMW') {
      cars.push(inventory[i])
    }
  }
  return cars
}
/**
 * A module to get list of car make Audi and BMW
 * @module ./problem6
 */

module.exports = problem6
