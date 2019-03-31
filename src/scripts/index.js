function sendCars(day,  ...cars) {
    cars.forEach(car => console.log(car))
}
sendCars('Monday', 1, 2)

const carIds = [10, 20, 30, 40]
let [carId1, carId2, ... restIds] = carIds
console.log(carId1, carId2, restIds)
let [, carId3, ... restIds2] = carIds
console.log(carId3, restIds)