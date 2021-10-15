// let student = { id: 1, name: 'Phumin', email: 'poooomin@hotmail.com' };
// for (let prop in student) {
//     console.log(prop);
//     console.log(student[prop]);
// }

// let data = [1, 10, 5, "Hello", true];
// for (let item of data) {
//     console.log(item);
// }

// let square = {
//     area: function () {
//         return this.side * this.side;
//     },
//     side: 10
// };

// console.log(square.area())

// let book = {
//     isbn: 1111,
//     title: "JS Beginner",
//     author: {
//         firstname: "John",
//         lastname: "Hang"
//     }
// };

// book.versions = [1.0, 1.5, 2.0];

// console.log(book);

function distance(p1, p2) {
    console.log(typeof p1);
    console.log(typeof p2);
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}

let point1 = { x: 1, y: 1 };
let point2 = { x: 2, y: 2 };
console.log(distance(point1, point2));

let line = Object.create(point1)
line1.x
line2.y
line1["name"] = "myLine"