// function sayHelloToConsole() {
//   console.log('Hello!')
// }
//
// sayHelloToConsole()
//
// function sayHello(name) {
//   if (name === undefined) {
//     name = 'undefined piece of garbage'
//   }
//   console.log('Hello  ' + name + '!')
// }
//
// sayHello("Vasileves")
// sayHello()
//
//
// function logUser () {
//   let userName = "mr.Ipsum"
//   console.log(userName)
// }
// logUser()
// console.log(userName)

// function getName() {
//   myName = prompt('Введите имя:')
//   return myName
// }
//
//
// alert('привет, ' + getName())
//
// function makeCoffee(cups, withMilk) {
//   if (withMilk) {
//     return console.log('Making ' + cups + 'cups of coffee with milk')
//   }
//     return console.log('Making ' + cups + 'cups of coffee without milk')
// }
//
// makeCoffee(24, false)
// makeCoffee(1, true)

setTimeout(console.log('task1'))


function showQuote(text, author) {
  if (text === undefined) {
    return
  }
    if (author === undefined) {
    author = 'Кто-то умный'
  }
  return console.log('«' + text +'» - ' + author + '.')
}

showQuote()
showQuote('Я - рыба', 'Петросян')
showQuote('А я - пиво')

setTimeout(console.log('task2'), 5000)

  function findMax(num1,mun2) {
    if (num1 > num2) {
      return console.log(num1)
    }
    if (num2 > num1) {
      return console.log(num2)
    }
    if (num1 === num2) {
      return console.log('Значния равны')
    }
  }

  let num1 = prompt('num 1')
  let num2 = prompt('num 2')
  findMax (num1, num2)

  setTimeout(console.log('task3'), 5000)

  function addOne(num1) {
  num1 = Number(num1)
  num1 += 1;
  return num1
  }

  num1 = addOne(prompt('num 1'))
  console.log(num1)

  setTimeout(console.log('task4'), 5000)

  function nextEven(num1) {
    if ((num1 % 2) === 0) {
      return console.log(Number(num1) + 2)
    }
    else {
      return console.log(Number(num1) + 1)
    }
  }

nextEven(prompt('Num1'))
nextEven(prompt('Num1 (проверить ещё раз)'))
