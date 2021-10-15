let animal = [
  'monkey',
  'rooster',
  'dog',
  'pig',
  'rat',
  'ox',
  'tiger',
  'rabbit',
  'dragon',
  'snake',
  'horse',
  'sheep',
]

let year = prompt('Enter A Year')
let findYear = year % 12

alert(`Your Year: ${animal[findYear]}`)
