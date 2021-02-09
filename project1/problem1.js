const problem1 = (inventory, carId) => {

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === carId) {
      return [inventory[i]]
    }
  }
}

module.exports = problem1
