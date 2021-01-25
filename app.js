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

rollin(d20Sides)

let showNumber = (number) => {
  let placeholder = document.getElementById('placeholder')
  placeholder.innerHTML = number
  console.log(placeholder)
}

showNumber(number);

let button = document.getElement