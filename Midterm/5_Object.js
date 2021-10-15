// Simple Object
let student = {
  name: 'Bob',
  age: 32,
  gender: 'male',
}

// Object Value is array
let profile = {
  id: 123,
  interests: ['music', 'sking'],
}

// Aggregated Object
let book = {
  isbn: 123456,
  title: 'JavaScript',
  author: {
    firstname: 'Phumin',
    lastname: 'Chumphu',
  },
}

console.log(book.isbn)
console.log(book['title'])
console.log(book['author']['firstname'])
book['publishedYear'] = 2000
console.log(book)
