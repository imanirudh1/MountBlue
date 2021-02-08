const problem2 = (inventory) => {
  let lastCar = inventory.length - 1
  return `Last car is a ${inventory[lastCar].car_make} ${inventory[lastCar].car_model}`
}

module.exports = problem2
