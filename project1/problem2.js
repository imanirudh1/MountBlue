/**
 * Find the last car details
 *
 * @param {Object[]} inventory - The details of the last car in the inventory
 * @return {string}
 */

const problem2 = (inventory) => {
  if (inventory.length === 0 || !Array.isArray(inventory)) return []
  let lastCar = inventory.length - 1
  return [
    `Last car is a ${inventory[lastCar].car_make} ${inventory[lastCar].car_model}`,
  ]
}

/**
 * A module that finds the last car details!
 * @module ./problem2
 */

module.exports = problem2
