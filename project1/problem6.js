const problem6 = (inventory) => {
  const cars = []
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].car_make === 'Audi' || inventory[i].car_make === 'BMW') {
      cars.push(inventory[i])
    }
  }
  return cars
}
module.exports = problem6
