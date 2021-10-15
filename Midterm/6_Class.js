class Rectangle {
  constructor(width, height) {
    this._width = width
    this._height = height
  }

  area() {
    return this._width * this._height
  }
}

let a = new Rectangle(2, 3)
console.log(a.area())
