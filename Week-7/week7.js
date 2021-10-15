//function expression
// const myFunc = function getStudentsInClass(instructor, ta, ...students) {
//   let greeting = "Hello";
//   return students;
// };

// Traditional Function (no arguments)

const myFunc = function (instructor = "unknown", numsOfstd = 0) {
  console.log(instructor);
  console.log(numsOfstd);
  return instructor;
  for (let i = 0; i < arguments.length; i++) {}
};

myFunc(undefined, 5);
