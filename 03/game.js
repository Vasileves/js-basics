// Координаты палуб
let location1 = 5
let location2 = 6
let location3 = 7
//Кол-во выстрелов
let currentShot = 0
let shots = 0
let hits = 0
let isSunk = false

//Цикл игры - работает, пока корабль не потонул
while (isSunk === false) {
  // Получаем координаты выстрела
  currentShot = Number(prompt('Введите число от 0 до 9:'))
  // Отмечаем, что сделан выстрел
  shots += 1
  // Проверяем, попал или не попал

  if (currentShot === location1) {
    hits += 1
  }

  if (currentShot === location2) {
    hits += 1
  }

  if (currentShot === location3) {
    hits += 1
  }

  if (hits > 2) {
    isSunk = true
    alert("Корабль сбит, вы победили!")
  }
  // Если попал, то увеличиваем счётчик попаданий

  // Если попал три раза, то топим корабль и поздравляем игрока с победой
}
