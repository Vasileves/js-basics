function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

// Координаты палуб
let location1 = randomInteger(0,9)
let location2 = randomInteger(0,9)
let location3 = randomInteger(0,9)
// Кол-во выстрелов
let currentShot = 0
let shots = 0
let hits = 0
let isSunk = false
// переменные, проверяющие попадание в три части корабля
let hit1 = false
let hit2 = false
let hit3 = false

//Debug mode
alert('ответы: ' + location1 + ', ' + location2 + ', ' + location3)
//Цикл игры - работает, пока корабль не потонул
while (isSunk === false) {
  // Получаем координаты выстрела
  currentShot = Number(prompt('Введите число от 0 до 9:'))
  // Отмечаем, что сделан выстрел
  shots += 1
  // Проверяем, попал или не попал

  if (currentShot === location1) {
    if (hit1 = false) {
      // если в первую часть ещё не стреляли
    hit1 = true
    // засчитываем попадание
    alert('В ячейке ' + currentShot + ' оказалась часть корабля!')
  }
  else {
    // если уже стреляли (хи1 = тру), то ругаемся
    alert('Зачем ты стреляешь в обломки?')
  }
  }

  if (currentShot === location2) {
    if (hit2 = false) {
    hit2 = true
    alert('В ячейке ' + currentShot + ' оказалась часть корабля!')
  }
  else {
    alert('Зачем ты стреляешь в обломки?')
  }
  }

  if (currentShot < 0 || currentShot > 9) {
    if (hit3 = false) {
    hit3 = true
    alert('В ячейке ' + currentShot + ' оказалась часть корабля!')
  }
  else {
    alert('Зачем ты стреляешь в обломки?')
  }

  // Если все три ячейки сбиты, то топим корабль и поздравляем игрока с победой
if (hit1 === true && hit2 === true && hit3 === true) {
  isSunk = true;
  alert('Корабль уничтожен!')
}
}
