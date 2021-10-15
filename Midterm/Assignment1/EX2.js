let rand = () => Math.floor(Math.random() * 10) + 1

let randomNumber = rand()
console.log(randomNumber)
let answer = true
let yourNumber = 0

while (answer) {
  yourNumber = prompt('Your Number')
  if (yourNumber > randomNumber) alert('Too high')
  else if (yourNumber < randomNumber) alert('Too Low')
  else if (yourNumber == randomNumber) {
    alert('You WIN!')
    answer = false
  } else alert('Please Enter Number 1-10')
}
