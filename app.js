let d20Sides = 20;

//function to roll the dice; 
let rollin = (d20Sides) => {
  let rolled = Math.floor(Math.random() * d20Sides) + 1 
  if (rolled == 20) {
    console.log('YEET')
    return 'YEET!'
  } else if (rolled == 1) {
    console.log('FC*K')
    return 'FC*K!'
  } else {
    return rolled
  }
}

let number = rollin(d20Sides)
console.log(number)

let test = document.querySelector('p')
console.log(test)



let showNumber = (number) => {
  let place = document.getElementById('placeholder')
  place.innerHTML = number
  console.log(place)
}

showNumber(number)

let button = document.getElementById('YEET')

