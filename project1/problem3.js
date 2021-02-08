const problem3 = (inventory) => {
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
  for (let i = 0; i < inventory.length; i++) {
    console.log(inventory[i].car_model)
  }
}
module.exports = problem3
