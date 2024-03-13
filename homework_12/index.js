const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

////Задание 1
// Создайте на основе страрого массива новый массив объектов по образу:
// [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const carsOnePrice = cars.map((car) => ({ brand: car.brand, isDiesel: car.isDiesel }));
console.log(carsOnePrice);

//Задание 2
//Создайте новый массив, где оставьте только машины с дизельным двигателем.

const carsIsDiesel = cars.filter(car => car.isDiesel);
console.log(carsIsDiesel);

//Задание 3
//Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const carsNoDiesel = cars.filter((car) => car.isDiesel != true);
console.log(carsNoDiesel);

//Задание 4
//Посчитайте общую стоимость всех машин не с дизельным двигателем.

const sum = carsNoDiesel.reduce((acc, car) => acc + car.price, 0)
console.log(sum);

//Задание 5
//Повысьте цену всех машин в массиве на 20%.

const percent = 20
cars.forEach((car) => car.price = car.price + (car.price * percent) / 100)
console.log(cars);

//Задание 6
//Создайте новый массив, где все дизельные машины заменены на
//{ brand: "Tesla", price: 25000, isDiesel: false }

const updateCars = cars.map((car) => {
    if (car.isDiesel === true)
        return { brand: "Tesla", price: 25000, isDiesel: false }
    else {
        return car
    };
}
)
console.log(updateCars);
