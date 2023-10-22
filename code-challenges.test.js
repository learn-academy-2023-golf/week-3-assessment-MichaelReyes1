// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.
describe('Fibonacci Sequence Generator', () => {
  it('should generate the Fibonacci sequence with a length of 6', () => {
  const fibonacciLength1 = 6
  // Expected output: [1, 1, 2, 3, 5, 8]
  const fibonacciLength2 = 10
  // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 expect(generateFibonacci(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
 expect(generateFibonacci(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
 })
}) 

//ReferenceError: FibonacciSequenceGenerator is not defined- good failure


// b) Create the function that makes the test pass.

// Pseudo code:
//create function named generateFibonacci 
//use if to check length is less than two
// return "Length should be greater than or equal to 2"
//create array called fibonacci and add 1 to the beginning
//use for to check i and the lengths
//add the sum of the last two numbers in the array
//add nextFibonacci to the end of the fibonacci array
//return fibonacci array

const generateFibonacci = (length) => {
  if (length < 2) {
    return "Length should be greater than or equal to 2"
  }
  let fibonacci = [1,1]
  for (let i = 2; i < length; i++) {
    let nextFibonacci = fibonacci[i -1] + fibonacci[i - 2]
    fibonacci.push(nextFibonacci)
  }
  return fibonacci
}

// PASS  ./code-challenges.test.js
//   Fibonacci Sequence Generator
//   ✓ should generate the Fibonacci sequence with a length of 6 (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.359 s, estimated 1 s




// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe('Sort Object Values', () => {
  it('should sort ther object values from least to greatest for studyMinutesWeek1', () => {
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
const result = sortObjectValues(studyMinutesWeek1)
// Expected output: [15, 15, 20, 30, 30, 60, 90]
  })
it('should sort the object values from least to greatest for studyMinutesWeek2', () => {
const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
const result = sortObjectValues(studyMinutesWeek2)
// Expected output: [10, 15, 20, 45, 60, 65, 100]
})
})

//● Sort Object Values › should sort ther object values from least to greates for studyMinutesWeek1

// ReferenceError: sortObjectValues is not defined

//  ● Sort Object Values › should sort the object values from least to greatest for studyMinutesWeek2

// ReferenceError: sortObjectValues is not defined


// b) Create the function that makes the test pass.

// Pseudo code:
//create function sortObjectValues and equal obj
//create a empty array called values
//for each key in object(obj)
//add the value with the key to values array
//sort the values array in order
//return the sorted values in a array

const sortObjectValues = (obj) => {
  const values = Object.values(obj)
  values.sort((a, b) => a - b)
  return values
}

// PASS  ./code-challenges.test.js
// Fibonacci Sequence Generator
//   ✓ should generate the Fibonacci sequence with a length of 6 (3 ms)
// Sort Object Values
//   ✓ should sort ther object values from least to greates for studyMinutesWeek1 (1 ms)
//   ✓ should sort the object values from least to greatest for studyMinutesWeek2

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.373 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.13s.
// learnacademy@MacBook-Air week-3-assessment-MichaelReyes1 % yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-3-assessment-MichaelReyes1/node_modules/.bin/jest
// PASS  ./code-challenges.test.js
// Fibonacci Sequence Generator
//   ✓ should generate the Fibonacci sequence with a length of 6 (2 ms)
// Sort Object Values
//   ✓ should sort ther object values from least to greatest for studyMinutesWeek1
//   ✓ should sort the object values from least to greatest for studyMinutesWeek2 (1 ms)
