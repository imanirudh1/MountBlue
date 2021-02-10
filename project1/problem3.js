/**
 * Prints the car model in sorted order
 *
 * @param {Object[]} inventory - The details of the cars
 */

const problem3 = (inventory) => {
  if (inventory.length === 0 || !Array.isArray(inventory)) return []
  inventory.sort((a, b) => {
    let car1 = a.car_model.toLowerCase()
    let car2 = b.car_model.toLowerCase()

    if (car1 < car2) {
      return -1
    }
    if (car1 > car2) {
      return 1
    }
    return 0
  })
  return inventory
}

/**
 * A module to list car model in sorted order!
 * @module ./problem3
 */

module.exports = problem3
