const problem1 = (inventory, carId) => {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === carId) {
      return `Car ${carId} is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`
    }
  }
}

module.exports = problem1
